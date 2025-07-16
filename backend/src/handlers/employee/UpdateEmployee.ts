import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import EmployeeUpdateValidator from '../../validators/dtos/EmployeeUpdateValidator'

export default async function UpdateEmployee(req: Request, res: Response) {
  try {
    // Parsing of request params, body, and queries happen here
    // Do not touch since this allows makes it easier to move to a new router if need be
    // If you want to deconstruct them, do it on later code
    const body = EmployeeUpdateValidator.parse(req.body)

    const {
      person,
      emergencyContacts: newEmergencyContacts,
      ...newEmployeeData
    } = body
    const { contactInfos: newEmployeeContactInfos } = person

    // Get Employee
    const employeeToBeUpdated = await prisma.employee.findFirst({
      where: { id: body.id },
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
        `Failed to update employee. Could not find employee with ID ${body.id}. `,
      )
      res
        .status(404)
        .json({ message: 'Failed to update employee. Employee not found.' })
      return
    }

    // Update employee person
    await prisma.person.update({
      data: {
        firstName: person.firstName,
        middleName: person.middleName,
        lastName: person.lastName,
      },
      where: { id: person.id },
    })

    await UpsertAndCleanPersonContactInfos(
      employeeToBeUpdated.person.id,
      newEmployeeContactInfos,
    )

    await UpsertAndCleanEmployeeEmergencyContacts(body.id, newEmergencyContacts)

    // Finally update the employee
    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeToBeUpdated.id },
      data: {
        ...newEmployeeData,
      },
      include: {
        person: {
          include: { contactInfos: true },
        },
        emergencyContacts: {
          include: { person: { include: { contactInfos: true } } },
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

async function UpsertAndCleanEmployeeEmergencyContacts(
  employeeId: number,
  newEmergencyContacts: {
    id: number
    person: {
      id: number
      firstName: string
      lastName: string
      contactInfos: {
        id: number
        number: string
        type: 'Landline' | 'Mobile'
      }[]
      middleName?: string | null | undefined
    }
    relationship:
      | 'Parent'
      | 'Sibling'
      | 'Spouse'
      | 'Child'
      | 'Guardian'
      | 'Other'
  }[],
) {
  const employeeToBeUpdated = await prisma.employee.findFirstOrThrow({
    where: { id: employeeId },
    include: {
      emergencyContacts: {
        include: { person: { include: { contactInfos: true } } },
      },
    },
  })

  // Delete the person linked to the old emergency contact since the deletion
  // is set to cascade on the schema file
  const removedEmergencyContactPersonIds = employeeToBeUpdated.emergencyContacts
    .filter(
      (oldContact) =>
        !newEmergencyContacts.some(
          (newContacts) => newContacts.id === oldContact.id,
        ),
    )
    .map((oldContact) => oldContact.id)

  await prisma.person.deleteMany({
    where: { id: { in: removedEmergencyContactPersonIds } },
  })

  const upsertedEmployeeEmergencyContacts = await Promise.all(
    newEmergencyContacts.map(async (newEmergencyContact) => {
      const { contactInfos: newContactInfos, ...newPersonDetails } =
        newEmergencyContact.person
      // Upsert the emergency contact person details first
      const upsertedEmergencyPerson = await prisma.person.upsert({
        create: {
          firstName: newPersonDetails.firstName,
          middleName: newPersonDetails.middleName,
          lastName: newPersonDetails.lastName,
        },
        update: newPersonDetails,
        where: {
          id: newPersonDetails.id,
        },
      })

      UpsertAndCleanPersonContactInfos(
        upsertedEmergencyPerson.id,
        newContactInfos,
      )

      return await prisma.employeeEmergencyContact.upsert({
        create: {
          employeeId: employeeId,
          personId: upsertedEmergencyPerson.id,
          relationship: newEmergencyContact.relationship,
        },
        update: {
          personId: upsertedEmergencyPerson.id,
          relationship: newEmergencyContact.relationship,
        },
        where: {
          id: newEmergencyContact.id,
        },
      })
    }),
  )

  return upsertedEmployeeEmergencyContacts
}

async function UpsertAndCleanPersonContactInfos(
  personId: number,
  newEmployeeContactInfos: {
    id: number
    number: string
    type: 'Landline' | 'Mobile'
  }[],
) {
  const personToBeUpdated = await prisma.person.findFirstOrThrow({
    where: { id: personId },
    include: { contactInfos: true },
  })

  // Delete old employee person contact info
  const removedContactInfoIds = personToBeUpdated.contactInfos
    .filter(
      (oldContact) =>
        !newEmployeeContactInfos.some(
          (newContact) => newContact.id === oldContact.id,
        ),
    )
    .map((oldContact) => oldContact.id)
  await prisma.contactInfo.deleteMany({
    where: { id: { in: removedContactInfoIds } },
  })

  // Upsert employee person contact info
  const upsertedEmployeeContactInfos = await Promise.all(
    newEmployeeContactInfos.map((employeeContact) =>
      prisma.contactInfo.upsert({
        create: {
          personId: personId,
          type: employeeContact.type,
          number: employeeContact.number,
        },
        update: {
          ...employeeContact,
        },
        where: { id: employeeContact.id },
      }),
    ),
  )
  return upsertedEmployeeContactInfos
}
