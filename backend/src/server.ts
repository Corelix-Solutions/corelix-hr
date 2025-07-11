import express from 'express'
import AttendanceController from './controllers/AttendanceController'
import HrController from './controllers/HrController'
import ProfileController from './controllers/ProfileController'
import envVars from './envVars'
import { prisma } from './PrismaSingleton'

const prismaClient = prisma

async function main() {
  const app = express()
  const PORT = envVars!.PORT

  app.use(express.json())

  app.use('/attendance', AttendanceController)
  app.use('/hr', HrController)
  app.use('/profile', ProfileController)

  app.listen(PORT, () => console.log(`Running on port ${PORT}`))
}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })
