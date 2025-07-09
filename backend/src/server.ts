import express from "express";
import AttendanceController from "./controllers/AttendanceController";
import HrController from "./controllers/HrController";
import ProfileController from "./controllers/ProfileController";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/attendance", AttendanceController);
app.use("/hr", HrController);
app.use("/profile", ProfileController);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
