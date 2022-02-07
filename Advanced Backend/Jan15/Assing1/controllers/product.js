const product = require('../services/product')

function getAllProducts(req, res) {
    res.send(product.getAllProducts())
}

function createProducts(req, res) {
    res.send(product.createProducts(req.body))
}

function updateProducts(req, res) {
    res.send(product.updateProducts(req.body))
}

function deleteProducts(req, res) {
    res.send(product.deleteProducts(req.body))
}

module.exports = {
    getAllProducts: getAllProducts,
    createProducts: createProducts,
    updateProducts: updateProducts,
    deleteProducts: deleteProducts
}