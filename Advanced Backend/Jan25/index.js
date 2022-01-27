const express = require('express');
const mysql = require('mysql');
const app = express();

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

app.use(express.json())

// app.use('/', employee);


app.listen(8000, () => {
    console.log("Connected to server at 8000");
});