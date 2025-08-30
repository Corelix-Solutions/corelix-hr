import * as z from 'zod'
import PersonValidator from '../base/PersonValidator'

export default z.object({
  ...PersonValidator.omit({ id: true }).shape,
})
