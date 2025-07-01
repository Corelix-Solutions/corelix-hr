const express = require('express');
const attendanceController = require('../../controllers/AttendanceController/attendanceController')
const router = express.Router();

router
    .route('/')
    .post(attendanceController.employeeClockIn)
    .put(attendanceController.employeeClockOut)

router
    .route('/')
    .post(attendanceController.leaveRequest)