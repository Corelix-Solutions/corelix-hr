import { Request, Response } from 'express'
import { prisma } from '../../PrismaSingleton'

export default async function DeleteEmployee(req: Request, res: Response) {
  const employeeId = parseInt(req.params.employeeId)
  try {
    const deleted = await prisma.employees.delete({ where: { employeeId } })
    res.json({ message: 'Employee deleted successfully', deleted })
  } catch (error: any) {
    console.error('Error deleting employee:', error)
    if (error.code === 'P2025') {
      // Prisma error code for record not found
      res.status(404).json({ error: 'Employee not found' })
    } else {
      res.status(500).json({ error: 'Failed to delete employee' })
    }
  }
}
