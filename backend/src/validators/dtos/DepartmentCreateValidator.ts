import * as z from 'zod'
import DepartmentValidator from '../base/DepartmentValidator'
import PositionCreateValidator from './PositionCreateValidator'

export default z.object({
  ...DepartmentValidator.omit({ id: true }).shape,
  positions: z.array(PositionCreateValidator).default([]),
})
