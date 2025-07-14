import * as z from 'zod'
import DepartmentValidator from '../base/DepartmentValidator'
import PositionCreateValidator from './PositionCreateValidator'

export default DepartmentValidator.omit({ id: true }).extend({
  positions: z.array(PositionCreateValidator).default([]),
})
