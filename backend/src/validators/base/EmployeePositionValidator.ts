import * as z from 'zod'

export default z.object({
  id: z.number(),
  dateStarted: z.coerce.date(),
  endWorkHour: z.number(),
  endWorkMinute: z.number(),
  startWorkHour: z.number(),
  startWorkMinute: z.number(),
  salary: z.bigint(),
})
