import { Router } from 'express'
import AddEmployee from '../handlers/employee/AddEmployee'
import DeleteEmployee from '../handlers/employee/DeleteEmployee'
import EditEmployee from '../handlers/employee/EditEmployee'
import GetEmployees from '../handlers/employee/GetEmployees'

const EmployeeController = Router()

EmployeeController.get('/', GetEmployees)
EmployeeController.post('/', AddEmployee)
EmployeeController.put('/:employeeId', EditEmployee)
EmployeeController.delete('/:employeeId', DeleteEmployee)

export default EmployeeController
