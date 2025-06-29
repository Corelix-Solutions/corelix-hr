const express = require('express')
const app = express()

const EmployeeRoute = require('./routes/EmployeeRoutes/profile')
app.use(express.json());
app.use(EmployeeRoute)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});