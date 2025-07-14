import { Prisma } from '../../prisma/generated'
import { prisma } from '../PrismaSingleton'

// Whatever cumbersome type hurdles Prisma puts you for type-safety
export type PersonCreateArgs = Prisma.Args<typeof prisma.person, 'create'>
export type PersonCreateResult = Prisma.Result<
  typeof prisma.person,
  PersonCreateArgs,
  'create'
>
export type PositionUpsertArgs = Prisma.Args<typeof prisma.position, 'upsert'>
