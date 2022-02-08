const cartService = require('../services/cart')

function getCarts(req, res) {
    res.send(cartService.getCartsfromDB)
}


module.exports = {
    getCarts: getCarts
}