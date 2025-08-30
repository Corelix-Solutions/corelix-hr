import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'
import { IdValidator } from '../../validators/UtilityValidators'

export default async function GetEmployeePayslips(req: Request, res: Response) {
  const body = IdValidator.pick({ employeeId: true }).parse(req.body)

  const payslips = await prisma.payslip.findMany({
    where: { employeePosition: { employeeId: body.employeeId } },
    take: 10,
  })

  res.status(200).json(payslips)
}
