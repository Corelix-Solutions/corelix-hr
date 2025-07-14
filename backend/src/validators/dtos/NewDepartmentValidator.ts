import * as z from 'zod'
import DepartmentValidator from '../base/DepartmentValidator'
import NewPositionValidator from './NewPositionValidator'

export default DepartmentValidator.omit({ id: true }).extend({
  positions: z.array(NewPositionValidator).default([]),
})
