import { Prisma } from '../../prisma/generated'
import { prisma } from '../PrismaSingleton'

// Whatever cumbersome type hurdles Prisma puts you for type-safety
export type CreatePersonArgs = Prisma.Args<typeof prisma.person, 'create'>
export type CreatePersonResult = Prisma.Result<
  typeof prisma.person,
  CreatePersonArgs,
  'create'
>
export type UpsertPositionArgs = Prisma.Args<typeof prisma.position, 'upsert'>
