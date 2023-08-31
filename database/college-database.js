const { MongoClient } = require('mongodb');
const constant = require('../util/constant');

 const client = new MongoClient(constant.DATABASE_URL);

 const connect =  () => client.connect().then((dbConnection) => dbConnection.db(constant.DATEBASE_NAME));

 const getCollectionByName = (collectionName) =>  connect().then((db) => db.collection(collectionName));

 module.exports = getCollectionByName;