const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const dbHandler = require('../services/user');


function createUser(req, res) {
    dbHandler.insertValue((req.body), () => {
        res.send({ "message": `${req.body.username} created` })
    })
}

function getUser(req, res) {
    dbHandler.getValue((req.body), (result) => {
        var db_password = result[0].password;
        var password = req.body.password;
        bcrypt.compare(password, db_password).then((data) => {
            if (data) {
                var payload = { "username": req.body.username, "iat": Date.now() }
                var secret = config.get('token_secret')
                var assign_token = jwt.sign(payload, secret);
                res.header({ "token": assign_token });
                res.send({ "message": "Successfully logged in" });
            } else {
                res.send({ "message": "Invalid password" })

            }
        })

    })
}

function getName(req, res) {
    res.send({ "message": `Hello ${req.query.Name}` });
}

module.exports = {
    createUser: createUser,
    getUser: getUser,
    getName: getName
}