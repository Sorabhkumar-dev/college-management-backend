const express = require('express');
const studentRoutes = express.Router();

const studentController = require('../controller/student-controller');

studentRoutes.post('/add-student/:courseId',studentController.insertStudent);
studentRoutes.get('/get-students',studentController.getAllStudent);
studentRoutes.get('/get-student/:studentId',studentController.getStudent);
studentRoutes.post('/update-student/:userId',studentController.updateStudent);

module.exports = studentRoutes;