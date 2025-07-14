import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import NewDepartmentValidator from '../../validators/dtos/NewDepartmentValidator'

export default async function AddDepartment(req: Request, res: Response) {
  try {
    const body = NewDepartmentValidator.parse(req.body)

    const createdDepartment = await prisma.department.create({
      data: {
        name: body.name,
        positions: { createMany: { data: body.positions } },
      },
    })

    res.status(200).json(createdDepartment)
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message:
          'Failed to create new department. See the error object for more details.',
        error: z.flattenError(error),
      })
    } else {
      res.status(500).json({ message: 'A server error has occured.' })
    }
  }
}
