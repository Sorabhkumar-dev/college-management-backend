const express = require('express');
const emplyoeeRoutes = express.Router();
const emplyeeContoller = require('../controller/emplyee-controller');

emplyoeeRoutes.post('/add-employee',emplyeeContoller.insertEmployee);

emplyoeeRoutes.get('/get-employees',emplyeeContoller.getEmployees);

emplyoeeRoutes.get('/get-employee/:employeeId',emplyeeContoller.getEmployee);

emplyoeeRoutes.delete('/delete-employee/:employeeId',emplyeeContoller.deleteEmployee);

module.exports = emplyoeeRoutes