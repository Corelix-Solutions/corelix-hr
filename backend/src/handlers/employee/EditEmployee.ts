import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { PersonCreateResult } from '../../types/prisma'
import EmployeeValidator from '../../validators/base/EmployeeValidator'
import { IdValidator } from '../../validators/UtilityValidators'

export default async function EditEmployee(req: Request, res: Response) {
  try {
    // Parsing of request params, body, and queries happen here
    // Do not touch since this allows makes it easier to move to a new router if need be
    // If you want to deconstruct them, do it on later code
    const params = IdValidator.pick({ employeeId: true }).parse(req.params)
    const body = EmployeeValidator.parse(req.body)

    const { person, emergencyContacts, ...parsedResult } = body
    const { contactInfos: personContactInfos, ...personFullName } = person

    // Get Employee
    const employeeToBeUpdated = await prisma.employee.findFirst({
      where: { id: params.employeeId },
      include: {
        emergencyContacts: {
          include: { person: { include: { contactInfos: true } } },
        },
        person: {
          include: { contactInfos: true },
        },
      },
    })

    if (!employeeToBeUpdated) {
      console.error(
        `Failed to update employee. Could not find employee with ID ${params.employeeId}. `,
      )
      res
        .status(404)
        .json({ message: 'Failed to update employee. Employee not found.' })
      return
    }

    // Delete the contact info of the employee then insert the new ones from the submission later
    const employeeContactInfoIds = employeeToBeUpdated.person.contactInfos.map(
      (infos) => infos.id,
    )
    await prisma.contactInfo.deleteMany({
      where: { id: { in: employeeContactInfoIds } },
    })

    // Delete the emergency contacts and then insert the new ones from the submission
    let oldEmContactIds: number[] = []
    let oldEmContactPersonIds: number[] = []
    let oldEmContactInfoIds: number[] = []
    for (const contact of employeeToBeUpdated.emergencyContacts) {
      oldEmContactIds.push(contact.id)
      oldEmContactPersonIds.push(contact.personId)
      oldEmContactInfoIds = oldEmContactInfoIds.concat(
        contact.person.contactInfos.map((info) => info.id),
      )
    }

    await prisma.employeeEmergencyContact.deleteMany({
      where: { id: { in: oldEmContactIds } },
    })
    await prisma.person.deleteMany({
      where: { id: { in: oldEmContactPersonIds } },
    })
    await prisma.contactInfo.deleteMany({
      where: { id: { in: oldEmContactInfoIds } },
    })

    // Extract, insert into db, and map the emergency contacts
    let insertedEmergencyPeople: PersonCreateResult[] = []
    for (const currentContact of emergencyContacts) {
      const { contactInfos, ...fullName } = currentContact.person
      const insertedEmergencyPerson = await prisma.person.create({
        data: {
          ...fullName,
          contactInfos: { createMany: { data: contactInfos } },
        },
      })

      insertedEmergencyPeople.push(insertedEmergencyPerson)
    }

    const mappedEmContactIdWithRelationship = insertedEmergencyPeople.map(
      (contactInDb) => ({
        personId: contactInDb.id,
        relationship: emergencyContacts.find(
          (submittedContact) =>
            submittedContact.person.firstName === contactInDb.firstName &&
            submittedContact.person.lastName,
        )!.relationship,
      }),
    )

    // Finally create the employee
    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeToBeUpdated.id },
      data: {
        ...parsedResult,
        emergencyContacts: {
          createMany: { data: mappedEmContactIdWithRelationship },
        },
        person: {
          update: {
            ...personFullName,
            contactInfos: {
              createMany: {
                data: personContactInfos,
              },
            },
          },
        },
      },
    })

    res.status(200).json(updatedEmployee)
  } catch (error) {
    console.error('Error updating employee:', error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message:
          'Failed to update employee due to incorrect inputs. See error object for more details.',
        error: z.treeifyError(error),
      })
    } else {
      res.status(500).json({
        message:
          "Failed to update employee. Please contact the website's administrators.",
      })
    }
  }
}
