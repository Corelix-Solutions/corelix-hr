import { PrismaClient } from '../prisma/generated/prisma'
import envVars from './envVars'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const dbUrl =
  envVars!.DATABASE_PASSWORD && envVars!.DATABASE_PASSWORD.length > 0
    ? `mysql://${envVars!.DATABASE_USER}:${envVars!.DATABASE_PASSWORD}@${
        envVars!.DATABASE_HOST
      }:${envVars!.DATABASE_PORT}/${envVars!.DATABASE_NAME}`
    : `mysql://${envVars!.DATABASE_USER}@${envVars!.DATABASE_HOST}:${
        envVars!.DATABASE_PORT
      }/${envVars!.DATABASE_NAME}`

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ datasourceUrl: dbUrl })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
