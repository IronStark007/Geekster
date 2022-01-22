const dbHandler = require('../services/employee')
const getAllEmployees = (req, res) => {
    dbHandler.selectAllQuery((result) => {
        res.send(result);
    })
}


const createEmployee = (req, res) => {
    dbHandler.insertValue((req.body), () => {
        res.send({ "message": `Employee with the name '${req.body.fName}' created` })
    })
}

const updateEmployee = (req, res) => {
    dbHandler.updateValueByfName((req.body), () => {
        res.send({ "message": `Employee with the name '${req.body.fName}' updated` })
    })
}

const deleteEmployee = (req, res) => {
    dbHandler.deleteByfName((req.body), () => {
        res.send({ "message": `Employee with the name '${req.body.fName}' deleted` })
    })
}

module.exports = {
    getAllEmployees: getAllEmployees,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}