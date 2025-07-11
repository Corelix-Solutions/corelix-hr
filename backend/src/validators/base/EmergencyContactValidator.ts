import * as z from 'zod'
import PersonValidator from './PersonValidator'

export default z.object({
  person: PersonValidator,
  relationship: z.enum([
    'Parent',
    'Sibling',
    'Spouse',
    'Child',
    'Guardian',
    'Other',
  ]),
})
