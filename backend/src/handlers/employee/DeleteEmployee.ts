import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { IdValidator } from '../../validators/UtilityValidators'

export default async function DeleteEmployee(req: Request, res: Response) {
  try {
    // Parsing of request params, body, and queries happen here
    // Do not touch since this allows makes it easier to move to a new router if need be
    // If you want to deconstruct them, do it on later code
    const params = IdValidator.pick({ employeeId: true }).parse(req.params)

    // Get Employee
    const matchingEmployeeIdCount = await prisma.employee.count({
      where: { id: params.employeeId },
    })

    if (matchingEmployeeIdCount < 1) {
      console.error(
        `Failed to delete employee. Could not find employee with ID ${params.employeeId}. `,
      )
      res
        .status(404)
        .json({ message: 'Failed to delete employee. Employee not found.' })
      return
    }

    await prisma.employee.delete({
      where: { id: params.employeeId },
    })

    res.status(201).json({ message: 'Employee deleted successfully.' })
  } catch (error: any) {
    console.error('Error deleting employee:', error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message:
          'Failed to delete employee due to incorrect inputs. See error object for more details.',
        error: z.treeifyError(error),
      })
    } else {
      res.status(500).json({
        message:
          "Failed to delete employee. Please contact the website's administrators.",
      })
    }
  }
}
