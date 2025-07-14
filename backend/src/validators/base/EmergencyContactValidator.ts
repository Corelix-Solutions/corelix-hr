import * as z from 'zod'
import PersonValidator from './PersonValidator'

export default z.object({
  id: z.number(),
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
