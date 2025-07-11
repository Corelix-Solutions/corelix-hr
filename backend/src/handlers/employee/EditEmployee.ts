import { Request, Response } from 'express'

export default async function EditEmployee(req: Request, res: Response) {
  const employeeId = parseInt(req.params.employeeId)
  const {
    employee_FirstName,
    employee_LastName,
    employee_Address,
    employee_PhoneNumber,
    employee_HireDate,
    employee_Gender,
    employee_Position,
    employee_Department,
    employee_Salary,
    employee_CivilStatus,
    employee_Status,
    employee_ShiftSchedule,
    employee_TIN,
    employee_SSSNumber,
    employee_PhilHealthNumber,
    employee_emergencyContactName,
    employee_emergencyContactNumber,
    employee_imageUrl,
  } = req.body

  // Build update data object only with provided fields
  // const updateData = {};
  // if (employee_FirstName !== undefined)
  //   updateData.employee_FirstName = employee_FirstName;
  // if (employee_LastName !== undefined)
  //   updateData.employee_LastName = employee_LastName;
  // if (employee_Address !== undefined)
  //   updateData.employee_Address = employee_Address;
  // if (employee_PhoneNumber !== undefined)
  //   updateData.employee_PhoneNumber = employee_PhoneNumber;
  // if (employee_HireDate !== undefined)
  //   updateData.employee_HireDate = employee_HireDate
  //     ? new Date(employee_HireDate)
  //     : null;
  // if (employee_Gender !== undefined)
  //   updateData.employee_Gender = employee_Gender;
  // if (employee_Position !== undefined)
  //   updateData.employee_Position = employee_Position;
  // if (employee_Department !== undefined)
  //   updateData.employee_Department = employee_Department;
  // if (employee_Salary !== undefined)
  //   updateData.employee_Salary = employee_Salary
  //     ? parseFloat(employee_Salary)
  //     : null;
  // if (employee_CivilStatus !== undefined)
  //   updateData.employee_CivilStatus = employee_CivilStatus;
  // if (employee_Status !== undefined)
  //   updateData.employee_Status = employee_Status;
  // if (employee_ShiftSchedule !== undefined)
  //   updateData.employee_ShiftSchedule = employee_ShiftSchedule;
  // if (employee_TIN !== undefined) updateData.employee_TIN = employee_TIN;
  // if (employee_SSSNumber !== undefined)
  //   updateData.employee_SSSNumber = employee_SSSNumber;
  // if (employee_PhilHealthNumber !== undefined)
  //   updateData.employee_PhilhealthNumber = employee_PhilHealthNumber;
  // if (employee_emergencyContactName !== undefined)
  //   updateData.employee_emergencyContactName = employee_emergencyContactName;
  // if (employee_emergencyContactNumber !== undefined)
  //   updateData.employee_emergencyContactNumber =
  //     employee_emergencyContactNumber;
  // if (employee_imageUrl !== undefined)
  //   updateData.employee_imageURL = employee_imageUrl;

  try {
    // const updatedEmployee = await prisma.employees.update({
    //   where: { employeeId },
    //   data: updateData,
    // });
    res.status(200).json({})
    // TODO-Hans: Remake this with validators
  } catch (error) {
    console.error('Error updating employee:', error)
    res.status(500).json({ error: 'Failed to update employee' })
  }
}
