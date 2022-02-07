async function getAllProductsFromDB() {
    return await connection.query('select * from products;')
}

async function addProductToDB(product) {
    var sql = `insert into products (name, info, reviews) values ( '${product.name}', '${product.info}', '${JSON.stringify(product.reviews)}');`
    console.log(sql)
    return await connection.query(sql)
}

async function updateProductToDB(product) {
    var sql = `update products set info='${product.info}', reviews='${JSON.stringify(product.reviews)}' where name='${product.name}'`;
    return await connection.query(sql)
}

async function deleteProductToDB(product) {
    var sql = `delete from products where name='${product.name}'`;
    return await connection.query(sql)
}

module.exports = {
    getAllProductsFromDB: getAllProductsFromDB,
    addProductToDB: addProductToDB,
    updateProductToDB: updateProductToDB,
    deleteProductToDB: deleteProductToDB
}