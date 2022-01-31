const bcrypt = require('bcrypt');
const connection = require('../db')


async function insertValue(data, callback) {
    var password = data.password;
    var salt = await bcrypt.genSalt(10);
    var hashedPassword = await bcrypt.hash(password, salt);
    connection.query(`insert into users (username,password,email,phone) values ('${data.username}','${hashedPassword}','${data.email}',${data.phone});`, (err, rows) => {
        if (err) {
            throw (err);
        } else { return callback(rows); }
    });
}


function getValue(data, callback) {
    connection.query(`select * from users where username='${data.username}';`, (err, rows) => {
        if (err) {
            throw (err);
        } else {
            return callback(rows);
        }
    })
}


module.exports = {
    insertValue: insertValue,
    getValue: getValue
}