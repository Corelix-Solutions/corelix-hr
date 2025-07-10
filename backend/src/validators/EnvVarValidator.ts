import * as z from 'zod'

export default z.object({
  DATABASE_USER: z.string().trim().min(1),
  DATABASE_PASSWORD: z.string().trim().min(1),
  DATABASE_HOST: z.string().trim().min(1),
  DATABASE_PORT: z.string().trim().min(1),
  DATABASE_NAME: z.string().trim().min(1),
})
