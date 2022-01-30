const express = require('express');
const employee = express();
const employeeHandler = require('../controller/employee')
const middleware = require('../middlewares/employee')


employee.get('/', employeeHandler.getAllEmployees);
employee.get('/:id', employeeHandler.getOneEmployee);
employee.post('/', middleware, employeeHandler.createEmployee);
employee.put('/', middleware, employeeHandler.updateEmployee);
employee.put('/:id', middleware, employeeHandler.updateEmployeeById);
employee.delete('/', employeeHandler.deleteEmployee);
employee.delete('/:id', employeeHandler.deleteEmployeeById);

module.exports = employee;