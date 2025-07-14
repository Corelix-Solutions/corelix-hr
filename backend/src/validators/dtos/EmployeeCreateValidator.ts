import { IdValidator } from '../UtilityValidators'
import EmployeeValidator from '../base/EmployeeValidator'
import PersonCreateValidator from './PersonCreateValidator'

export default EmployeeValidator.omit({ id: true }).extend({
  ...IdValidator.pick({ positionId: true }).shape,
  person: PersonCreateValidator,
})
