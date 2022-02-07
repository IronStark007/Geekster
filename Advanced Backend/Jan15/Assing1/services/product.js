const product = require('../models/product')


const getAllProducts = () => {
    return product
}

const createProducts = (data) => {
    product.push(data);
    return { "message": `Product with id ${data.id} created` }
}

const updateProducts = (data) => {
    prod = product.filter((product) => product.id == data.id)[0]
    prod.name = data.name
    prod.rating = data.rating
    return { "message": `Product with id ${data.id} updated` }
}

const deleteProducts = (data) => {
    product.splice(data.id - 1, 1)
    return { "message": `Product with id ${data.id} deleted` }
}


module.exports = {
    getAllProducts: getAllProducts,
    createProducts: createProducts,
    updateProducts: updateProducts,
    deleteProducts: deleteProducts
}