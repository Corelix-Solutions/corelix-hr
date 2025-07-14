import { IdValidator } from '../UtilityValidators'
import EmployeeValidator from '../base/EmployeeValidator'

export default EmployeeValidator.extend(
  IdValidator.pick({ positionId: true }).shape,
)
