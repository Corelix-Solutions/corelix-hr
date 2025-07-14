import * as z from 'zod'
import { RequiredStringValidator } from '../UtilityValidators'
import PositionValidator from './PositionValidator'

export default z.object({
  id: z.number(),
  name: RequiredStringValidator,
  positions: z.array(PositionValidator).default([]),
})
