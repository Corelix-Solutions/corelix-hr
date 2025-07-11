import * as z from 'zod'
import { RequiredStringValidator } from '../UtilityValidators'

export default z.object({
  number: RequiredStringValidator,
  type: z.enum(['Landline', 'Mobile']),
})
