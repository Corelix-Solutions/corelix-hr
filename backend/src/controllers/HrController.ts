import { Router } from "express";
import GetLeaveRequests from "../handlers/hr/GetLeaveRequests";
import GetAttendances from "../handlers/hr/GetAttendances";
import EditEmployeeLeaveRequest from "../handlers/hr/EditEmployeeLeaveRequest";

const HrController = Router();

HrController.get("/leave-requests", GetLeaveRequests);
HrController.get("/attendances", GetAttendances);
HrController.put("/leave-requests/:requestId", EditEmployeeLeaveRequest);

export default HrController;
