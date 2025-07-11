import { Request, Response } from "express";
import { prisma } from "../../PrismaSingleton";

export default async function GetEmployees(req: Request, res: Response) {
  const employees = await prisma.employees.findMany();
  res.json(employees);
}
