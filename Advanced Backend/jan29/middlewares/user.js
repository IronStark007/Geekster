const schemaValidator = require('../models/user');


function validateBody(req, res, next) {
    var validate = schemaValidator(req.body)
    if (validate.error) {
        return res.status(404).send({ 'ValidationError': validate.error.message })
    } else { return next() }
}
module.exports = {
    validateBody: validateBody
}