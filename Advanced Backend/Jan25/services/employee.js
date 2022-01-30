const connection = require('../db')

const selectAllQuery = (callback) => {
    connection.query("select * from employee;", (err, rows) => {
        if (err) {
            throw (err);
        } else {
            return callback(rows);
        }
    })
}

const selectOneQuery = (data, callback) => {
    connection.query(`select * from employee where employee_id='${data}';`, (err, rows) => {
        if (err) {
            throw (err);
        } else {
            return callback(rows);
        }
    })
}

const insertValue = (data, callback) => {
    connection.query(`insert into employee values (${data.employee_id},'${data.fName}','${data.lName}',${data.salary},'${data.department}','${data.joiningDate}');`, (err, rows) => {
        if (err) {
            throw (err);
        } else { return callback(rows); }
    });
}

const updateValueByfName = (data, callback) => {
    connection.query(`update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where fName='${data.fName}';`, (err, rows) => {
        if (err) {
            throw err;
        } else { return callback(rows); }
    })
}


const updateByID = (data, id, callback) => {
    connection.query(`update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where employee_id='${id}';`, (err, rows) => {
        if (err) {
            throw err;
        } else { return callback(rows); }
    })
}

const deleteByfName = (data, callback) => {
    connection.query(`delete from employee where fName='${data.fName}';`, (err, rows) => {
        if (err) {
            return (err);
        } else { return callback(rows); }
    })
}

const deleteById = (id, callback) => {
    connection.query(`delete from employee where employee_id=${id}`, (err, rows) => {
        if (err) {
            throw err;
        } else { return callback(rows); }
    })
}

module.exports = {
    selectAllQuery: selectAllQuery,
    selectOneQuery: selectOneQuery,
    insertValue: insertValue,
    updateValueByfName: updateValueByfName,
    updateByID: updateByID,
    deleteByfName: deleteByfName,
    deleteById: deleteById
}