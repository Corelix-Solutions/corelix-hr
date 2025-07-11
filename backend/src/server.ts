import express from 'express'
import AttendanceController from './controllers/AttendanceController'
import EmployeeController from './controllers/EmployeeController'
import HrController from './controllers/HrController'
import envVars from './envVars'
import { prisma } from './PrismaSingleton'

const prismaClient = prisma

async function main() {
  const app = express()
  const PORT = envVars!.PORT

  app.use(express.json())

  app.use('/api/attendance', AttendanceController)
  app.use('/api/hr', HrController)
  app.use('/api/employees', EmployeeController)

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
