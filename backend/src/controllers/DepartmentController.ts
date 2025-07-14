import { Router } from 'express'
import AddDepartment from '../handlers/department/AddDepartment'
import DeleteDepartment from '../handlers/department/DeleteDepartment'
import EditDepartment from '../handlers/department/EditDepartment'
import GetDepartments from '../handlers/department/GetDepartments'

const DepartmentController = Router()

DepartmentController.get('/', GetDepartments)
DepartmentController.post('/', AddDepartment)
DepartmentController.put('/:departmentId', EditDepartment)
DepartmentController.delete('/:departmentId', DeleteDepartment)

export default DepartmentController
