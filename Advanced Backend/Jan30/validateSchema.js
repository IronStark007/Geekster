const joi = require('joi');

const schema = joi.object({
    username: joi.string().max(20).required(),
    password: joi.string().max(60).required(),
    email: joi.string().max(25).required(),
    phone: joi.number().required()
})

const schemaValidator = (user) => {
    return schema.validate(user);
}

module.exports = schemaValidator;