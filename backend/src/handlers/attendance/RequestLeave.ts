import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'

export default async function RequestLeave(req: Request, res: Response) {
  const { employeeId, reason, startDate, endDate } = req.body
  if (!employeeId || !startDate || !endDate) {
    return res.status(400).json({
      error: 'missing employeeId, reason, startDate, endDate are required data',
    })
  }
  try {
    const newLeaveRequest = await prisma.leaveRequest.create({
      data: {
        employeeId,
        reason,
        status: 'Pending',
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    })
    res.status(201).json(newLeaveRequest)
  } catch (error) {
    console.error('Error adding new leave request', error)
    res.status(500).json({ error: 'Failed to add new leave request' })
  }
}
