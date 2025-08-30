import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'

export default async function GetEmployees(req: Request, res: Response) {
  const employees = await prisma.employee.findMany({
    include: { person: true, positions: { include: { supervisor: true } } },
  })
  console.log('get route!')
  res.json(employees)
}
