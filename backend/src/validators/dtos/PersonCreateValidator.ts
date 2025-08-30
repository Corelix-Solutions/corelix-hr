import * as z from 'zod'
import PersonValidator from '../base/PersonValidator'
import ContactInfoCreateValidator from './ContactInfoCreateValidator'

export default z.object({
  ...PersonValidator.omit({ id: true }).shape,
  contactInfos: z.array(ContactInfoCreateValidator).default([]),
})
