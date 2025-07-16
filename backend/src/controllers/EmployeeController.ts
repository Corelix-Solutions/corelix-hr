import { Router } from 'express'
import AddEmployee from '../handlers/employee/AddEmployee'
import DeleteEmployee from '../handlers/employee/DeleteEmployee'
import GetEmployees from '../handlers/employee/GetEmployees'
import UpdateEmployee from '../handlers/employee/UpdateEmployee'

const EmployeeController = Router({ mergeParams: true })

EmployeeController.get('/', GetEmployees)
EmployeeController.post('/', AddEmployee)
EmployeeController.put('/:employeeId', UpdateEmployee)
EmployeeController.delete('/:employeeId', DeleteEmployee)

export default EmployeeController
