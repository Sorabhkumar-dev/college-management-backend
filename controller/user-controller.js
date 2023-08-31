const db = require('../database/user-db');

const allUser = (req, res) => {
    db
        .getAllUser()
        .then((users) => {
            res.setHeader('content-type', 'application/json');
            res.json(users);
        });
}

const addUser = (req, res) => {
    console.log(req.body);
    db
        .insertUser(req.body);
    res.sendStatus(204);
}

const deleteUser = (req, res) => {
    db.deleteUser(req.params.userId);
    res.sendStatus(204);
}

const updateUser = (req,res) => {
    db.upadteUser(req.params.userId,req.body);
    res.sendStatus(204);
}


module.exports.allUser = allUser;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;