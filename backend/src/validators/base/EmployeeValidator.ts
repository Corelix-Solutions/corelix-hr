import * as z from 'zod'
import {
  RequiredStringValidator,
  TrimmedStringValidator,
} from '../UtilityValidators'
import EmergencyContactValidator from './EmergencyContactValidator'
import PersonValidator from './PersonValidator'

export default z.object({
  id: z.number(),
  address: RequiredStringValidator,
  civilStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed']),
  dateHired: z.coerce.date().default(new Date()),
  dateOfBirth: z.coerce.date(),
  email: RequiredStringValidator,
  gender: z.enum(['Male', 'Female', 'Other']),
  philhealth: RequiredStringValidator,
  pronouns: RequiredStringValidator,
  sss: RequiredStringValidator,
  tin: RequiredStringValidator,
  type: z.enum(['FullTime', 'PartTime', 'Intern', 'Contractor']),
  emergencyContacts: z.array(EmergencyContactValidator).default([]),
  probationEndDate: z.coerce.date().nullish(),
  person: PersonValidator,
  profileUrl: TrimmedStringValidator.optional(),
})
