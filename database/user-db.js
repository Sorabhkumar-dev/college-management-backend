const { ObjectId } = require('mongodb');
const collection = require('../database/college-database');
const constant = require('../util/constant');

const getUserCollection = () =>  collection(constant.USER_COLLECTION);

const insertUser = (user) =>  getUserCollection().then((userCollection) => userCollection.insertOne(user));

const getAllUser = () => getUserCollection().then((userCollection) => userCollection.find({}).toArray());

const deleteUser = (userId) => getUserCollection().then((userCollection) => userCollection.deleteOne({"_id":new ObjectId(userId)}));

const upadteUser = (userId,data) => getUserCollection().then((userCollection) => userCollection.updateOne({"_id":new ObjectId(userId)},{$set:data}))

module.exports.insertUser = insertUser;
module.exports.getAllUser = getAllUser;
module.exports.deleteUser = deleteUser;
module.exports.upadteUser = upadteUser;