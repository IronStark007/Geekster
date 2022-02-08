var express = require('express');
var user = express();
var userController = require('./../controllers/user')
var userMiddleware = require('../middlewares/user')

user.get('/', userController.helloUser)
user.post('/register', userMiddleware.validateBody, userController.registerUser)
user.post('/login', userController.loginUser)
user.post('/logout', userController.logoutUser)

module.exports = user