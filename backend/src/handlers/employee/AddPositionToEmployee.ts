import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import EmployeePositionCreateValidator from '../../validators/dtos/EmployeePositionCreateValidator'

export default async function AddPositionToEmployee(
  req: Request,
  res: Response,
) {
  try {
    const body = EmployeePositionCreateValidator.parse(req.body)

    const addedEmployeePosition = await prisma.employeePosition.create({
      data: body,
    })

    res.status(200).json(addedEmployeePosition)
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res.status(422).json({ message: 'Validation Error' })
    } else {
      res.status(500).json({ message: 'Server Error' })
    }
  }
}
