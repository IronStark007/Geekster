const dbHandler = require('../services/employee')


const getAllEmployees = (req, res) => {
    dbHandler.selectAllQuery((result) => {
        console.log(result);
        res.send(result);
    })
}


const getOneEmployee = (req, res) => {
    id = req.url.split('/')[1];
    dbHandler.selectOneQuery((id), (result) => {
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


const updateEmployeeById = (req, res) => {
    id = req.url.split('/')[1];
    dbHandler.updateByID((req.body), (id), () => {
        res.send({ "message": `Employee with the employee_id '${id}' updated` })
    })
}

const deleteEmployee = (req, res) => {
    dbHandler.deleteByfName((req.query), () => {
        res.send({ "message": `Employee with the name '${req.query.fName}' deleted` })
    })
}


const deleteEmployeeById = (req, res) => {
    id = req.url.split('/')[1];
    dbHandler.deleteById((id), () => {
        res.send({ "message": `Employee with the employee_id '${id}' deleted` })
    })
}


module.exports = {
    getAllEmployees: getAllEmployees,
    getOneEmployee: getOneEmployee,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    updateEmployeeById: updateEmployeeById,
    deleteEmployee: deleteEmployee,
    deleteEmployeeById: deleteEmployeeById
}