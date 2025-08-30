import * as z from 'zod'
import {
  RequiredStringValidator,
  TrimmedStringValidator,
} from './UtilityValidators'

export default z.object({
  DATABASE_USER: RequiredStringValidator,
  DATABASE_PASSWORD: TrimmedStringValidator,
  DATABASE_HOST: RequiredStringValidator,
  DATABASE_PORT: RequiredStringValidator,
  DATABASE_NAME: RequiredStringValidator,
  PORT: z.coerce.number(),
  FILE_STORAGE_PATH_ROOT: RequiredStringValidator.startsWith('/').endsWith('/'),
})
