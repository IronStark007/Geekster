async function getCartsfromDB(username) {
    return await connection.query(`select * from carts where username="${username}"`)
}

module.exports = getCartsfromDB;