import { Request, Response } from "express";
import { prisma } from "../../PrismaSingleton";

export default async function RequestLeave(req: Request, res: Response) {
  const { employeeId, leaverequest_reason, leaverequest_status, leave } =
    req.body;
  if (!employeeId || !leaverequest_status || !leave) {
    return res.status(400).json({
      error:
        "missing employeeId, leaverequest_status and leave are required data",
    });
  }
  try {
    const newLeaveRequest = await prisma.employee_request.create({
      data: {
        employeeId,
        leaverequest_reason: leaverequest_reason || null,
        leaverequest_status,
        leave,
      },
    });
    res.status(201).json(newLeaveRequest);
  } catch (error) {
    console.error("Error adding new leave request", error);
    res.status(500).json({ error: "Failed to add new leave request" });
  }
}
