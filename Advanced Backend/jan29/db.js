var mysql = require('mysql2')

var db_params = {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'users',
}
global.connection = mysql.createPool(db_params).promise()

// global.connection = mysql.createConnection(db_params)
// connection.connect((e) => {
//     if (e) {
//         throw e
//     }
//     console.log("connected to mysql successfully")
// })

// connection.end()
// var data = connection.query('select * from product;')