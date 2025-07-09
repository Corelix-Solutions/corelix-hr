import { Request, Response } from "express";
import { prisma } from "../../PrismaSingleton";

export default async function GetLeaveRequests(req: Request, res: Response) {
  const leaveRequest = await prisma.employee_request.findMany();
  res.json(leaveRequest);
}
