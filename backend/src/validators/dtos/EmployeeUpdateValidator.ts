import * as z from 'zod'
import { IdValidator } from '../UtilityValidators'
import EmployeeValidator from '../base/EmployeeValidator'

export default z.object({
  ...EmployeeValidator.omit({ id: true }).shape,
  ...IdValidator.pick({ positionId: true }).shape,
})
