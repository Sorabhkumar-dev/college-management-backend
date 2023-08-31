const studentDB = require('../database/student-db');
const userDb = require('../database/user-db');

const insertStudent = (req,res) => userDb.insertUser(req.body).then((result) =>{
    if(result.acknowledged){
        studentDB.insertStudent({courseId:req.params.courseId,userId:result.insertedId.toJSON()})
        res.sendStatus(204);
    }
});


const getAllStudent = (req,res) =>  studentDB.getAllStudent().then((students) => res.send(students));

const getStudent = (req,res) => studentDB.getStudent(req.params.studentId).then((student) => res.send(student));

const updateStudent = (req,res) => userDb.upadteUser(req.params.userId,req.body).then((result) => {
    if(result.acknowledged){
        res.send(204);
    }else{
        res.send(500);
    }
});

module.exports.insertStudent = insertStudent;
module.exports.getAllStudent = getAllStudent;
module.exports.getStudent = getStudent;
module.exports.updateStudent = updateStudent;