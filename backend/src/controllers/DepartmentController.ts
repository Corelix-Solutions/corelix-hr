import { Router } from 'express'
import AddDepartment from '../handlers/department/AddDepartment'
import DeleteDepartment from '../handlers/department/DeleteDepartment'
import GetDepartments from '../handlers/department/GetDepartments'
import UpdateDepartment from '../handlers/department/UpdateDepartment'

const DepartmentController = Router({ mergeParams: true })

DepartmentController.get(`/${GetDepartments.name}`, GetDepartments)
DepartmentController.post(`/${AddDepartment.name}`, AddDepartment)
DepartmentController.put(`/${UpdateDepartment.name}`, UpdateDepartment)
DepartmentController.delete(`/${DeleteDepartment.name}`, DeleteDepartment)

export default DepartmentController
