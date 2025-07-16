import * as z from 'zod'
import { IdValidator } from '../UtilityValidators'

export const AddPositionToEmployeeValidator = z.object({
  dateStarted: z.coerce.date(),
  endWorkHour: z.number(),
  endWorkMinute: z.number(),
  startWorkHour: z.number(),
  startWorkMinute: z.number(),
  salary: z.bigint(),
  ...IdValidator.pick({ employeeId: true, positionId: true }).shape,
})
