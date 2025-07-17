import { Router } from 'express'
import AddEmployee from '../handlers/employee/AddEmployee'
import AddPositionToEmployee from '../handlers/employee/AddPositionToEmployee'
import DeleteEmployee from '../handlers/employee/DeleteEmployee'
import GetEmployeePositions from '../handlers/employee/GetEmployeePositions'
import GetEmployees from '../handlers/employee/GetEmployees'
import UpdateCurrentEmployeePosition from '../handlers/employee/UpdateCurrentEmployeePosition'
import UpdateEmployee from '../handlers/employee/UpdateEmployee'

const EmployeeController = Router({ mergeParams: true })

EmployeeController.get(`/${GetEmployees.name}`, GetEmployees)
EmployeeController.post(`/${AddEmployee.name}`, AddEmployee)
EmployeeController.put(`/${UpdateEmployee.name}`, UpdateEmployee)
EmployeeController.delete(`/${DeleteEmployee.name}`, DeleteEmployee)
EmployeeController.get(`/${GetEmployeePositions.name}`, GetEmployeePositions)
EmployeeController.post(`/${AddPositionToEmployee.name}`, AddPositionToEmployee)
EmployeeController.put(
  `/${UpdateCurrentEmployeePosition.name}`,
  UpdateCurrentEmployeePosition,
)

export default EmployeeController
