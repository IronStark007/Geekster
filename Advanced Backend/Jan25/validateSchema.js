const joi = require('joi');

const schema = joi.object({
    employee_id: joi.number().required(),
    fName: joi.string().max(20).required(),
    lName: joi.string().max(20).required(),
    salary: joi.number().max(5).required(),
    department: joi.string().max(50).required(),
    joiningDate: joi.string().max(20).required()
})

const schemaValidator = (user) => {
    return schema.validate(user);
}

module.exports = schemaValidator;