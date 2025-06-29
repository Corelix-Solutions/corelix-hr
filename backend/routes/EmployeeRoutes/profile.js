require('dotenv').config();
const express = require('express');
const {
    getAllEmployees,
    addNewEmployee,
    editExistingEmployee,
    deleteEmployee
} = require('../../controllers/EmployeeController/profileController')
const router = express.Router();

router.get('/api/employeeprofile', getAllEmployees);
router.post('/api/employeeprofile', addNewEmployee);
router.put('/api/employeeprofile/:employeeId', editExistingEmployee);
router.delete('/api/employeeprofile/:employeeId', deleteEmployee)

module.exports = router;