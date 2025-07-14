import * as z from 'zod'
import { RequiredStringValidator } from '../UtilityValidators'

export default z.object({
  id: z.number(),
  name: RequiredStringValidator,
})
