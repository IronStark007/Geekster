var bcrypt = require('bcrypt')
const { response } = require('express')

async function createUser(user) {
    var password = user.password
    console.log(password)
    var salt = await bcrypt.genSalt(10)
    var hashedPassword = await bcrypt.hash(password, salt)
    sql = `insert into users (username,password,email,phone,usertype) values ('${user.username}','${hashedPassword}','${user.email}', ${user.phone}, '${user.usertype}');`
    return await connection.query(sql)
}

async function getUser(username) {
    return await connection.query(`select * from users where username="${username}"`)
}

module.exports = {
    createUser: createUser,
    getUser: getUser
}