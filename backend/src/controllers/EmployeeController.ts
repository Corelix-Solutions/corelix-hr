import { Router } from 'express'
import AddEmployee from '../handlers/employee/AddEmployee'
import DeleteEmployee from '../handlers/employee/DeleteEmployee'
import EditEmployee from '../handlers/employee/EditEmployee'
import GetEmployees from '../handlers/employee/GetEmployees'

const EmployeeController = Router()

EmployeeController.get('/employees', GetEmployees)
EmployeeController.post('/employees', AddEmployee)
EmployeeController.put('/employees/:employeeId', EditEmployee)
EmployeeController.delete('/employees/:employeeId', DeleteEmployee)

export default EmployeeController
