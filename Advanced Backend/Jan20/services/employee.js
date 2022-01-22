const connection = require('../db')

const selectAllQuery = (callback) => {
    connection.query("select * from employee;", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            callback(rows);
        }
    })
}

const selectOneQuery = (data, callback) => {
    connection.query(`select * from employee where fName='${data.fName}';`, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            callback(rows);
        }
    })
}

const insertValue = (data, callback) => {
    connection.query(`insert into employee values (${data.id},'${data.fName}','${data.lName}',${data.salary},'${data.department}','${data.joiningDate}');`, (err, rows) => {
        if (err) {
            console.log(err);
        } else { callback(rows); }
    });
}

const updateValueByfName = (data, callback) => {
    connection.query(`update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where fName='${data.fName}';`, (err, rows) => {
        if (err) {
            console.log(err);
        } else { callback(rows); }
    })
}

const deleteByfName = (data, callback) => {
    connection.query(`delete from employee where fName='${data.fName}';`, (err, rows) => {
        if (err) {
            console.log(err);
        } else { callback(rows); }
    })
}

module.exports = {
    selectAllQuery: selectAllQuery,
    insertValue: insertValue,
    updateValueByfName: updateValueByfName,
    deleteByfName: deleteByfName
}