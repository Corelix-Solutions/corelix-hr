import { Request, Response } from 'express'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'

export default async function GetDepartments(req: Request, res: Response) {
  try {
    const departments = await prisma.department.findMany()
    res.status(200).json(departments)
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      res.status(422).json({
        message:
          'Failed to new department. See the error object for more details.',
        error: z.flattenError(error),
      })
    } else {
      res.status(500).json({ message: 'A server error has occured.' })
    }
  }
}
