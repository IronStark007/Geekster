const jwt = require('jsonwebtoken');
const config = require('config');

function authenticateUser(req, res, next) {
    var token = req.headers['authorization'].split('Bearer ')[1]
    try {
        jwt.verify(token, config.get('token_secret'));
        return next();
    } catch (err) {
        return res.status(404).send({ "error": err.message })
    }
}

module.exports = authenticateUser