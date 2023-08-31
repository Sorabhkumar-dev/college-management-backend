const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user_routes');
const courseRoutes = require('./routes/course-routes');
const studentRoutes = require('./routes/student_routes');
const employeeRoutes = require('./routes/employee_routes')

const constant = require('./util/constant');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoutes);
app.use('/course',courseRoutes);
app.use('/student',studentRoutes);
app.use('/employee',employeeRoutes);
// app.use((req,res) => {
//     req.query.userId
//     req.query.designationId
//     req.query.salary
//     res.sendStatus
// })

app.listen(constant.PORT,()=>{
    console.log("app started...")
});