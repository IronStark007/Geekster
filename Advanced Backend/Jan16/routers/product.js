var product = express.Router()
var productMiddleware = require('./../middlewares/product')
var productController = require('./../controllers/product')

product.get('/', productController.getAllProducts)
product.post('/', productMiddleware, productController.createProduct)
product.put('/', productMiddleware, productController.updateProducts)
product.delete('/', productController.deleteProducts)

module.exports = product
    //router -> (middleware) -> controller -> (services) -> db