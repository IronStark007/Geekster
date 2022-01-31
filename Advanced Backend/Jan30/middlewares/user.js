const jwt = require('jsonwebtoken');
const config = require('config');
const schemaValidator = require('../validateSchema');

function authenticateUser(req, res, next) {
    var token = req.headers['authorization'].split('Bearer ')[1]
    try {
        jwt.verify(token, config.get('token_secret'));
        return next();
    } catch (err) {
        console.log("ERee")
        return res.status(404).send({ "error": err.message })
    }
}

function validateBody(req, res, next) {
    var validate = schemaValidator(req.body)
    if (validate.error) {
        return res.status(404).send({ 'ValidationError': validate.error.message })
    } else { return next() }
}
module.exports = {
    validateBody: validateBody,
    authenticateUser: authenticateUser
}