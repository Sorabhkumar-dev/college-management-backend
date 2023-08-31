const employeeDB = require('../database/employee-db');
const userDB = require('../database/user-db');

const insertEmployee = (req,res) => userDB.insertUser(req.body).then((result) => {
    if(result.acknowledged){
        employeeDB.insertEmplyeeIntoDB({userId:result.insertedId.toJSON(),designationId:req.query.designationId,salary:req.query.salary}).then((result) =>{
            if(result.acknowledged){
                res.sendStatus(204);
            }
        });
    }else{
        res.sendStatus(500);
    }
});


const getEmployees = (req,res) => employeeDB.getEmployeesFromDB().then((employee) => res.send(employee));

const getEmployee = (req,res) => employeeDB.getEmployeeFromDB(req.params.employeeId).then((result) =>{
    res.send(result);
});

const deleteEmployee = (req,res) => employeeDB.deleteEmployeeFromDB(req.params.employeeId).then((result) => {
    if(result.acknowledged){
        res.sendStatus(204);
    }
});

module.exports.insertEmployee = insertEmployee;
module.exports.getEmployees = getEmployees;
module.exports.getEmployee = getEmployee;
module.exports.deleteEmployee = deleteEmployee;