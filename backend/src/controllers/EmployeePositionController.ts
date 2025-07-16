import { Router } from 'express'
import AddPositionToEmployee from '../handlers/employeePosition/AddPositionToEmployee'
import GetEmployeePositions from '../handlers/employeePosition/GetEmployeePositions'

const EmployeePositionController = Router({ mergeParams: true })

EmployeePositionController.get('/', GetEmployeePositions)
EmployeePositionController.post('/', AddPositionToEmployee)

export default EmployeePositionController
