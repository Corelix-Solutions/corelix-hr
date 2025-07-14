import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { IdValidator } from '../../validators/UtilityValidators'

export default async function DeleteDepartment(req: Request, res: Response) {
  try {
    const params = IdValidator.pick({ departmentId: true }).parse(req.params)

    const departmentToBeDeleted = await prisma.department.findFirst({
      where: { id: { equals: params.departmentId } },
    })

    if (!departmentToBeDeleted) {
      res.status(404).json({
        message: `Failed to delete department ${params.departmentId}. Department was not found.`,
      })
      return
    }

    await prisma.department.delete({
      where: { id: departmentToBeDeleted.id },
    })

    res.status(201).json({ message: 'Department deleted successfully.' })
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message: `Failed to delete department. See the error object for more details.`,
        error: z.flattenError(error),
      })
    } else {
      res.status(500).json({ message: 'A server error has occured.' })
    }
  }
}
