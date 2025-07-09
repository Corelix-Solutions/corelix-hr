import { Request, Response } from "express";
import { prisma } from "../../PrismaSingleton";

export default async function EditEmployeeLeaveRequest(
  req: Request,
  res: Response
) {
  const { employeeId, leave, leaverequest_reason, leaverequest_status } =
    req.body;
  if (!employeeId || !leave || !leaverequest_reason || !leaverequest_status) {
    return res.status(400).json({ error: "Please provide employee details" });
  }
  try {
    // Find the latest leave request for the employee using createdAt
    const latestLeaveRequest = await prisma.employee_request.findFirst({
      where: { employeeId },
      orderBy: { createdAt: "desc" },
    });

    if (!latestLeaveRequest) {
      return res.status(404).json({ error: "Leave request not found" });
    }

    // Update the latest leave request
    const updatedLeaveRequest = await prisma.employee_request.update({
      where: { leaverequest_id: latestLeaveRequest.leaverequest_id },
      data: {
        leave,
        leaverequest_reason,
        leaverequest_status,
      },
    });

    res.json(updatedLeaveRequest);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the leave request" });
  }
}
