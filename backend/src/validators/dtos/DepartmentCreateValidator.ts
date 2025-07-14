import * as z from 'zod'
import DepartmentValidator from '../base/DepartmentValidator'
import NewPositionValidator from './PositionCreateValidator'

export default DepartmentValidator.omit({ id: true }).extend({
  positions: z.array(NewPositionValidator).default([]),
})
