import * as bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import * as passwordGenerator from 'generate-password'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { CreateManyPersonResult } from '../../types/prisma'
import NewEmployeeValidator from '../../validators/dtos/NewEmployeeValidator'

export default async function AddEmployee(req: Request, res: Response) {
  try {
    // Parsing of request params, body, and queries happen here
    // Do not touch since this allows makes it easier to move to a new router if need be
    // If you want to deconstruct them, do it on later code
    const body = NewEmployeeValidator.parse(req.body)

    const { person, emergencyContacts, positionId, ...parsedResult } = body
    const { contactInfos: personContactInfos, ...personFullName } = person

    // Extract, insert into db, and map the emergency contacts
    const emergencyContactPeopleInDb: CreateManyPersonResult =
      await prisma.person.createManyAndReturn({
        data: emergencyContacts.map((contact) => ({ ...contact.person })),
      })

    const mappedEmContactIdWithRelationship = emergencyContactPeopleInDb.map(
      (contactInDb) => ({
        personId: contactInDb.id,
        relationship: emergencyContacts.find(
          (submittedContact) =>
            submittedContact.person.firstName === contactInDb.firstName &&
            submittedContact.person.lastName,
        )!.relationship,
      }),
    )

    // This generates a temp password
    const password = passwordGenerator.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      strict: true,
    })
    const hashedPassword = await bcrypt.hash(password, 10)

    // Finally create the employee
    const newEmployee = await prisma.employee.create({
      data: {
        ...parsedResult,
        passwordHash: hashedPassword,
        emergencyContacts: {
          createMany: { data: mappedEmContactIdWithRelationship },
        },
        person: {
          create: {
            ...personFullName,
            contactInfos: {
              createMany: {
                data: personContactInfos,
              },
            },
          },
        },
        positions: {
          connect: { id: positionId },
        },
      },
    })

    res.status(200).json(newEmployee)
  } catch (error) {
    console.error('Error adding new employee:', error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message:
          'Failed to create new employee due to incorrect inputs. See error object for more details.',
        error: z.flattenError(error),
      })
    } else {
      res.status(500).json({
        message:
          "Failed to create new employee. Please contact the website's administrators.",
      })
    }
  }
}
