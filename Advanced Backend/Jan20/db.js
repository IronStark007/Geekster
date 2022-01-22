const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'Employees',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to db!");
    }
});

module.exports = connection;