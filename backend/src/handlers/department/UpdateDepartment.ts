import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { PositionUpsertArgs } from '../../types/prisma'
import { IdValidator } from '../../validators/UtilityValidators'
import UpdateDepartmentValidator from '../../validators/dtos/DepartmentUpdateValidator'

export default async function UpdateDepartment(req: Request, res: Response) {
  try {
    const params = IdValidator.pick({ departmentId: true }).parse(req.params)
    const body = UpdateDepartmentValidator.parse(req.body)

    const departmentToBeUpdated = await prisma.department.findFirst({
      where: { id: { equals: params.departmentId } },
    })

    if (!departmentToBeUpdated) {
      res.status(404).json({
        message: `Failed to update department ${params.departmentId}. Department was not found.`,
      })
      return
    }

    const upserts: PositionUpsertArgs[] = body.positions.map((position) => ({
      create: {
        name: position.name,
        type: position.type,
        departmentId: departmentToBeUpdated.id,
      },
      update: position,
      where: { id: position.id },
    }))

    const updatedDepartment = await prisma.department.update({
      data: {
        name: body.name,
        positions: { upsert: upserts },
      },
      where: { id: departmentToBeUpdated.id },
    })

    res.status(200).json(updatedDepartment)
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message:
          'Failed to update department. See the error object for more details.',
        error: z.flattenError(error),
      })
    } else {
      res.status(500).json({ message: 'A server error has occured.' })
    }
  }
}
