const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient();
const generatePassword = require('generate-password');
const bcrypt = require('bcryptjs');


// This generates a temp password
const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
})
const hashedPassword = await bcrypt.hash(password, 10);

const getEmployeeLeaveRequest = async (req, res) => {
    const leaveRequest = await prisma.employee_request.findMany();
    res.json(leaveRequest)
}   

const getEmployeeAttendance = async (req, res) => {
    const employeeAttendance = await prisma.employees_attendance.findMany();
    res.json(employeeAttendance)
}

const createJobPost = async (req, res) => {
    
}

const editEmployeeLeaveRequest = async (req, res) => {
    const {
        employeeId,
        leave,
        leaverequest_reason,
        leaverequest_status
    } = req.body;
    if (!employeeId || !leave || !leaverequest_reason || !leaverequest_status) {
        return res.status(400).json({ error: 'Please provide employee details' });
    }
    try {
        // Find the latest leave request for the employee using createdAt
        const latestLeaveRequest = await prisma.employee_request.findFirst({
            where: { employeeId },
            orderBy: { createdAt: 'desc' }
        });

        if (!latestLeaveRequest) {
            return res.status(404).json({ error: 'Leave request not found' });
        }

        // Update the latest leave request
        const updatedLeaveRequest = await prisma.employee_request.update({
            where: { leaverequest_id: latestLeaveRequest.leaverequest_id },
            data: {
                leave,
                leaverequest_reason,
                leaverequest_status
            }
        });

        res.json(updatedLeaveRequest);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the leave request' });
    }
};

module.exports = {
    getEmployeeLeaveRequest,
    getEmployeeAttendance,
    editEmployeeLeaveRequest
}