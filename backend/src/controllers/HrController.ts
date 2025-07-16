import { Router } from 'express'
import EditEmployeeLeaveRequest from '../handlers/hr/EditEmployeeLeaveRequest'
import GetAttendances from '../handlers/hr/GetAttendances'
import GetLeaveRequests from '../handlers/hr/GetLeaveRequests'

const HrController = Router({ mergeParams: true })

HrController.get('/leave-requests', GetLeaveRequests)
HrController.get('/attendances', GetAttendances)
HrController.put('/leave-requests/:requestId', EditEmployeeLeaveRequest)

export default HrController
