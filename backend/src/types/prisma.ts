import { Prisma } from '../../prisma/generated'
import { prisma } from '../PrismaSingleton'

// Whatever cumbersome type hurdles Prisma puts you for type-safety

export type CreateManyPersonArgs = Prisma.Args<
  typeof prisma.person,
  'createManyAndReturn'
>
export type CreateManyPersonResult = Prisma.Result<
  typeof prisma.person,
  CreateManyPersonArgs,
  'createManyAndReturn'
>
