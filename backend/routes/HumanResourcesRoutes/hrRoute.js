const express = require('express');
const { getEmployeeLeaveRequest, editEmployeeLeaveRequest, getEmployeeAttendance } = require('../../controllers/HumanResourcesController/hrController');
const router = express.Router();

router
    .route('/humanresources')
    .get(getEmployeeLeaveRequest)
    .get(getEmployeeAttendance)
    .post();
router
    .route('/humanresources/:hrId')
    .put(editEmployeeLeaveRequest)
    .delete();

module.exports = router;