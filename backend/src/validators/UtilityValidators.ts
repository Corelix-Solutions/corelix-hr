import * as z from 'zod'

export const TrimmedStringValidator = z.string().trim()
export const RequiredStringValidator = TrimmedStringValidator.min(1)
export const IdValidator = z.object({
  positionId: z.number(),
  employeeId: z.number(),
  departmentId: z.number(),
})
