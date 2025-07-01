const express = require('express');
const employeeController = require('../../controllers/EmployeeController/profileController')
const router = express.Router();

router
    .route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.addNewEmployee);
router
    .route('/:employeeId')
    .put(employeeController.editExistingEmployee)
    .delete(employeeController.deleteEmployee)

module.exports = router;