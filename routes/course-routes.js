const express = require('express');
const courseRoutes = express.Router();

const courseContoller = require('../controller/course-controller')

courseRoutes.get('/get-course',courseContoller);

module.exports = courseRoutes;