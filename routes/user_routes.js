const express = require('express');
const userRoutes = express.Router();

const userController = require('../controller/user-controller');

userRoutes.get('/get-all-users',userController.allUser);

userRoutes.post('/add-user',userController.addUser);

userRoutes.delete('/delete-user/:userId',userController.deleteUser);

userRoutes.put('/update-user/:userId',userController.updateUser);

module.exports = userRoutes;