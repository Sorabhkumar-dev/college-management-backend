const getCourse = require('../database/course-db');

const getCourses = (req,res) => getCourse().then((cousers) => res.send(cousers));
module.exports = getCourses;