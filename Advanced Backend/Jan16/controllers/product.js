var connectToProductDB = require('./../services/product')

function getAllProducts(req, res) {
    connectToProductDB.getAllProductsFromDB().then(([data, fields]) => {
        console.log(data)
        res.status(200).send(data)
        return
    }).catch((err) => {
        console.log(err)
    })
}

function createProduct(req, res) {
    connectToProductDB.addProductToDB(req.body).then(([data, fields]) => {
        console.log(data)
        if (data.affectedRows == 1) {
            res.status(200).send({ "message": "Product successfully created" })
            return
        }
    }).catch((err) => {
        console.log(err)
    })
}

function updateProducts(req, res) {
    connectToProductDB.updateProductToDB(req.body).then(([data, fields]) => {
        if (data.affectedRows == 1) {
            res.status(200).send({ "message": "Product successfully updated" })
            return
        }
    }).catch((err) => {
        console.log(err)
    })
}

function deleteProducts(req, res) {
    connectToProductDB.deleteProductToDB(req.body).then(([data, fields]) => {
        if (data.affectedRows == 1) {
            res.status(200).send({ "message": "Product successfully deleted" })
            return
        }
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    updateProducts: updateProducts,
    deleteProducts: deleteProducts
}