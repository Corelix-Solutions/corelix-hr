import { Router } from "express";
import ClockIn from "../handlers/attendance/ClockIn";
import ClockOut from "../handlers/attendance/ClockOut";

const AttendanceController = Router();

AttendanceController.post("/clock-in", ClockIn);
AttendanceController.put("/clock-out", ClockOut);
AttendanceController.post("/request-leave", ClockOut);

export default AttendanceController;
