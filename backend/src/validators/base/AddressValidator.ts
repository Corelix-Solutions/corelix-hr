import * as z from 'zod'
import { RequiredStringValidator } from '../UtilityValidators'

export default z.object({
  id: z.number(),
  line1: RequiredStringValidator,
  line2: RequiredStringValidator,
  state: RequiredStringValidator,
  postalCode: RequiredStringValidator,
  city: RequiredStringValidator,
})
