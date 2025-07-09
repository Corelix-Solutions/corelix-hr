const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient();


// Clock In: Create a new attendance record for the employee
const employeeClockIn = async (req, res) => {
    const { 
        employeeId, 
        clockIn,
        shiftSchedule
          } = req.body;
    if (!employeeId || !shiftSchedule) {
        return res.status(400).json({ error: 'employeeId and shiftSchedule is required' });
    }
    try {
        const newClockIn = await prisma.employees_attendance.create({
            data: {
                employeeId: employeeId,
                clockIn: clockIn ? new Date(clockIn) : new Date(),
                shiftSchedule: shiftSchedule,
            }
        });
        res.status(201).json(newClockIn);
    } catch (error) {
        console.error('Error clocking in:', error);
        res.status(500).json({ error: 'Failed to add employee clock in' });
    }
};

// Clock Out: Update the latest attendance record for the employee where clockOut is null
const employeeClockOut = async (req, res) => {
    const { employeeId, clockOut } = req.body;
    if (!employeeId) {
        return res.status(400).json({ error: 'employeeId is required' });
    }
    try {
        const latestAttendance = await prisma.employees_attendance.findFirst({
            where: {
                employeeId: employeeId,
                clockOut: null
            },
            orderBy: { clockIn: 'desc' }
        });
        if (!latestAttendance) {
            return res.status(404).json({ error: 'No open attendance record found for this employee' });
        }
        const updatedAttendance = await prisma.employees_attendance.update({
            where: { attendance_id: latestAttendance.attendance_id },
            data: {
                clockOut: clockOut ? new Date(clockOut) : new Date()
            }
        });
        res.status(200).json(updatedAttendance);
    } catch (error) {
        console.error('Error clocking out:', error);
        res.status(500).json({ error: 'Failed to add employee clock out' });
    }
};


const leaveRequest = async (req, res) => {
    const {
        employeeId,
        leaverequest_reason,
        leaverequest_status,
        leave
    } = req.body;
    if (!employeeId || !leaverequest_status || !leave) {
        return res.status(400).json({ error: 'missing employeeId, leaverequest_status and leave are required data' });
    }
    try {
        const newLeaveRequest = await prisma.employee_request.create({
            data: {
                employeeId,
                leaverequest_reason: leaverequest_reason || null,
                leaverequest_status,
                leave
            }
        });
        res.status(201).json(newLeaveRequest);
    } catch (error) {
        console.error('Error adding new leave request', error);
        res.status(500).json({ error: 'Failed to add new leave request' });
    }
};

module.exports = {
    employeeClockIn,
    employeeClockOut,
    leaveRequest
}