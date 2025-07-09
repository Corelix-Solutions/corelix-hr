import { Request, Response } from "express";
import { prisma } from "../../PrismaSingleton";

export default async function GetAttendances(req: Request, res: Response) {
  const employeeAttendance = await prisma.employees_attendance.findMany();
  res.json(employeeAttendance);
}
