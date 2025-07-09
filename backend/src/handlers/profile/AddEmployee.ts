import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import * as passwordGenerator from "generate-password";
import { prisma } from "../../PrismaSingleton";

export default async function AddEmployee(req: Request, res: Response) {
  const {
    employee_FirstName,
    employee_LastName,
    employee_Address,
    employee_PhoneNumber,
    employee_HireDate,
    employee_Gender,
    employee_Position,
    employee_Department,
    employee_Salary,
    employee_CivilStatus,
    employee_Status,
    employee_ShiftSchedule,
    employee_TIN,
    employee_SSSNumber,
    employee_PhilHealthNumber,
    employee_emergencyContactName,
    employee_emergencyContactNumber,
    employee_imageUrl,
    password,
  } = req.body;
  if (
    !employee_FirstName ||
    !employee_LastName ||
    !employee_Address ||
    !employee_PhoneNumber ||
    !employee_HireDate ||
    !employee_Gender ||
    !employee_Position ||
    !employee_Department ||
    !employee_Salary ||
    !employee_CivilStatus ||
    !employee_Status ||
    !employee_ShiftSchedule ||
    !employee_TIN ||
    !employee_SSSNumber ||
    !employee_PhilHealthNumber ||
    !employee_emergencyContactName ||
    !employee_emergencyContactNumber ||
    !employee_imageUrl ||
    !password
  ) {
    return res.status(400).json({ error: "All employee fields are required." });
  }

  try {
    // This generates a temp password
    const password = passwordGenerator.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      strict: true,
    });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = await prisma.employees.create({
      data: {
        employee_FirstName,
        employee_LastName,
        employee_Address,
        employee_PhoneNumber,
        employee_HireDate: new Date(employee_HireDate),
        employee_Gender,
        employee_Position,
        employee_Department,
        employee_Salary: parseFloat(employee_Salary),
        employee_CivilStatus,
        employee_Status,
        employee_ShiftSchedule,
        employee_TIN,
        employee_SSSNumber,
        employee_PhilhealthNumber: employee_PhilHealthNumber,
        employee_emergencyContactName,
        employee_emergencyContactNumber,
        employee_imageURL: employee_imageUrl,
        password: hashedPassword,
      },
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error("Error adding new employee:", error);
    res.status(500).json({ error: "Failed to create new employee" });
  }
}
