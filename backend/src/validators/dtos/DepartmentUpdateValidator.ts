import * as z from 'zod'
import DepartmentValidator from '../base/DepartmentValidator'
import PositionValidator from '../base/PositionValidator'

export default DepartmentValidator.omit({ id: true }).extend({
  positions: z.array(PositionValidator).default([]),
})
