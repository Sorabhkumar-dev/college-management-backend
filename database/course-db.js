const getCollectionByName = require('../database/college-database');
const constant = require('../util/constant');


const getCourse = () => getCollectionByName(constant.COURSE_COLLECTION).then((collection) => collection.find({}).toArray());

module.exports = getCourse;