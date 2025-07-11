import * as z from 'zod'
import {
  RequiredStringValidator,
  TrimmedStringValidator,
} from '../UtilityValidators'
import ContactInfoValidator from './ContactInfoValidator'

export default z.object({
  firstName: RequiredStringValidator,
  middleName: TrimmedStringValidator.nullish(),
  lastName: RequiredStringValidator,
  contactInfos: z.array(ContactInfoValidator).default([]),
})
