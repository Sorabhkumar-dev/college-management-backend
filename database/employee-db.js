const constant = require('../util/constant');
const collection = require('../database/college-database');
const userDB = require('../database/user-db');
const { ObjectId } = require('mongodb');

const employeeCollection = () => collection(constant.EMPLOYEE_COLLECTION);

const insertEmplyee = (employee) => employeeCollection().then((emplyeeDB) => emplyeeDB.insertOne(employee));

const getEmployees = () => employeeCollection().then((emplyeeDB) => emplyeeDB.find({}).toArray());

const getEmployee = (employeeId) => employeeCollection().then((emplyeeDB) => emplyeeDB.findOne({"_id":new ObjectId(employeeId)}));

const deleteEmployee = (employeeId) => employeeCollection()
.then((emplyeeDB) => emplyeeDB.findOne({"_id":new ObjectId(employeeId)}))
.then((employee) => userDB.deleteUser(employee.userId))
.then((_employee) => employeeCollection().then((employeeDB) => employeeDB.deleteOne({"_id":new ObjectId(employeeId)})));

module.exports.insertEmplyeeIntoDB = insertEmplyee;
module.exports.getEmployeesFromDB = getEmployees;
module.exports.getEmployeeFromDB = getEmployee;
module.exports.deleteEmployeeFromDB = deleteEmployee;