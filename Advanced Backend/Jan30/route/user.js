const express = require('express');
const route = express();
const user = require('../controller/user')
const middleware = require('../middlewares/user')

route.post('/register', middleware.validateBody, user.createUser);
route.post('/login', user.getUser);
route.get('/home', middleware.authenticateUser, user.getName);

module.exports = route;