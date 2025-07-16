import { Router } from 'express'
import AddDepartment from '../handlers/department/AddDepartment'
import DeleteDepartment from '../handlers/department/DeleteDepartment'
import GetDepartments from '../handlers/department/GetDepartments'
import UpdateDepartment from '../handlers/department/UpdateDepartment'

const DepartmentController = Router({ mergeParams: true })

DepartmentController.get('/', GetDepartments)
DepartmentController.post('/', AddDepartment)
DepartmentController.put('/:departmentId', UpdateDepartment)
DepartmentController.delete('/:departmentId', DeleteDepartment)

export default DepartmentController
