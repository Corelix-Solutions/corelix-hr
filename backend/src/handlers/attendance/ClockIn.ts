import { Request, Response } from "express";
import { prisma } from "../../PrismaSingleton";

// Clock In: Create a new attendance record for the employee
export default async function ClockIn(req: Request, res: Response) {
  const { employeeId, clockIn, shiftSchedule } = req.body;
  if (!employeeId || !shiftSchedule) {
    return res
      .status(400)
      .json({ error: "employeeId and shiftSchedule is required" });
  }
  try {
    const newClockIn = await prisma.employees_attendance.create({
      data: {
        employeeId: employeeId,
        clockIn: clockIn ? new Date(clockIn) : new Date(),
        shiftSchedule: shiftSchedule,
      },
    });
    res.status(201).json(newClockIn);
  } catch (error) {
    console.error("Error clocking in:", error);
    res.status(500).json({ error: "Failed to add employee clock in" });
  }
}
