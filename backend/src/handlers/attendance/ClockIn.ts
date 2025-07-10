import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'

// Clock In: Create a new attendance record for the employee
export default async function ClockIn(req: Request, res: Response) {
  const { employeeId, timeIn } = req.body
  if (!employeeId) {
    return res.status(400).json({ error: 'employeeId required' })
  }
  try {
    const newClockIn = await prisma.attendance.create({
      data: {
        employeeId: employeeId,
        timeIn: timeIn ? new Date(timeIn) : new Date(),
      },
    })
    res.status(201).json(newClockIn)
  } catch (error) {
    console.error('Error clocking in:', error)
    res.status(500).json({ error: 'Failed to add employee clock in' })
  }
}
