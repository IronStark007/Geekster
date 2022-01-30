const joi = require('joi');
const employee = require('./employee/employee')

const schema = joi.object({
    employee_id: joi.number().required(),
    fName: joi.string().max(20).required(),
    lName: joi.string().max(20).required(),
    salary: joi.number().required(),
    department: joi.string().max(50).required(),
    joiningDate: joi.string().max(20).required()
})

const schemaValidator = (body) => {
    return schema.validate(body);
}

module.exports = schemaValidator;