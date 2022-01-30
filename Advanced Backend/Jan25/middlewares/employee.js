const schemaValidator = require('../validateSchema');


module.exports = (req, res, next) => {
    var validate = schemaValidator(req.body)
    if (validate.error) {
        return res.status(404).send({ 'ValidationError': validate.error.message })
    } else { return next() }
}