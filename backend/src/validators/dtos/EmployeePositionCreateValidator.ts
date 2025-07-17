import * as z from 'zod'
import { IdValidator } from '../UtilityValidators'
import EmployeePositionValidator from '../base/EmployeePositionValidator'

export default z.object({
  ...EmployeePositionValidator.omit({ id: true }).shape,
  ...IdValidator.pick({ employeeId: true, positionId: true }).shape,
})
