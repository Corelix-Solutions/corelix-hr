import { Router } from "express";
import GetEmployees from "../handlers/profile/GetEmployees";
import AddEmployee from "../handlers/profile/AddEmployee";
import EditEmployee from "../handlers/profile/EditEmployee";
import DeleteEmployee from "../handlers/profile/DeleteEmployee";

const ProfileController = Router();

ProfileController.get("/employees", GetEmployees);
ProfileController.post("/employees", AddEmployee);
ProfileController.put("/employees/:employeeId", EditEmployee);
ProfileController.delete("/employees/:employeeId", DeleteEmployee);

export default ProfileController;
