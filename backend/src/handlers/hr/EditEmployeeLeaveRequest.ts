import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'

export default async function EditEmployeeLeaveRequest(
  req: Request,
  res: Response,
) {
  const { employeeId, startDate, endDate, reason, status } = req.body
  if (!employeeId || !startDate || !endDate || !reason || !status) {
    return res.status(400).json({ error: 'Please provide employee details' })
  }
  try {
    // Find the latest leave request for the employee using createdAt
    const latestLeaveRequest = await prisma.leaveRequest.findFirst({
      where: { employee: { id: employeeId } },
      orderBy: { dateCreated: 'desc' },
    })

    if (!latestLeaveRequest) {
      return res.status(404).json({ error: 'Leave request not found' })
    }

    // Update the latest leave request
    const updatedLeaveRequest = await prisma.leaveRequest.update({
      where: { id: latestLeaveRequest.id },
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
        status,
      },
    })

    res.json(updatedLeaveRequest)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while updating the leave request' })
  }
}
