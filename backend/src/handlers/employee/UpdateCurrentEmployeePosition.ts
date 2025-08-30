import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import EmployeePositionUpdateValidator from '../../validators/dtos/EmployeePositionUpdateValidator'

export default async function UpdateCurrentEmployeePosition(
  req: Request,
  res: Response,
) {
  try {
    const body = EmployeePositionUpdateValidator.parse(req.body)
    const employeePositionToBeUpdated = await prisma.employeePosition.findFirst(
      {
        where: { employeeId: body.employeeId },
        orderBy: { dateStarted: 'desc' },
      },
    )

    if (!employeePositionToBeUpdated) {
      res.status(404).json({
        message: `Error updating employee's current position. Current position of employee ${body.employeeId} not found.`,
      })
      return
    }

    const updatedEmployeePosition = await prisma.employeePosition.update({
      data: body,
      where: { id: employeePositionToBeUpdated.id },
    })

    res.status(200).json(updatedEmployeePosition)
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res
        .status(422)
        .json({ message: 'Validation Error', error: z.treeifyError(error) })
    } else {
      res.status(500).json({ message: 'Server Error' })
    }
  }
}
