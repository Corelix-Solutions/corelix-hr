import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { IdValidator } from '../../validators/UtilityValidators'

export default async function GetEmployeePositions(
  req: Request,
  res: Response,
) {
  try {
    const body = IdValidator.pick({ employeeId: true }).parse(req.body)

    const employeePositions = await prisma.employeePosition.findMany({
      where: { employeeId: body.employeeId },
      include: {
        position: { include: { department: true } },
        supervisor: { include: { person: true } },
      },
    })

    res.status(200).json(employeePositions)
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res.status(422).json({ message: 'Validation Error' })
    } else {
      res.status(500).json({ message: 'Server Error' })
    }
  }
}
