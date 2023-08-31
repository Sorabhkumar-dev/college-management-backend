const constant = require('../util/constant');
const collection = require('../database/college-database');
const { ObjectId } = require('mongodb');

const getStudentCollection = () => collection(constant.STUDENT_COLLECTION);

const insertStudent = (student) => getStudentCollection().then((studentCollection) => studentCollection.insertOne(student));

const getAllStudent = ()  => getStudentCollection().then((stusdentCollection) => stusdentCollection.find({}).toArray());

const getStudent = (studentId) => getStudentCollection().then((studentCollection) => studentCollection.findOne({"_id":new ObjectId(studentId)}));

module.exports.insertStudent = insertStudent;
module.exports.getAllStudent = getAllStudent;
module.exports.getStudent = getStudent