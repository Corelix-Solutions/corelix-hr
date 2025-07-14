import { IdValidator } from '../UtilityValidators'
import EmployeeValidator from '../base/EmployeeValidator'

export default EmployeeValidator.omit({ id: true }).extend(
  IdValidator.pick({ positionId: true }).shape,
)
