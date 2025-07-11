import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'

// Clock Out: Update the latest attendance record for the employee where clockOut is null
export default async function ClockOut(req: Request, res: Response) {
  const { employeeId, timeOut } = req.body
  if (!employeeId) {
    return res.status(400).json({ error: 'employeeId is required' })
  }
  try {
    const latestAttendance = await prisma.attendance.findFirst({
      where: {
        employeeId: employeeId,
        timeOut: null,
      },
      orderBy: { timeIn: 'desc' },
    })
    if (!latestAttendance) {
      return res
        .status(404)
        .json({ error: 'No open attendance record found for this employee' })
    }
    const updatedAttendance = await prisma.attendance.update({
      where: { id: latestAttendance.id },
      data: {
        timeOut: timeOut ? new Date(timeOut) : new Date(),
      },
    })
    res.status(200).json(updatedAttendance)
  } catch (error) {
    console.error('Error clocking out:', error)
    res.status(500).json({ error: 'Failed to add employee clock out' })
  }
}
