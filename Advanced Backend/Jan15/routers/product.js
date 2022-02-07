var router = express.Router()
var productMiddleware = require('./../middlewares/product')
var product = require('../controllers/product')

router.use(express.json())
router.get('/products', productMiddleware, product.getAllProducts)
router.post('/products', productMiddleware, product.createProducts)
router.put('/products', productMiddleware, product.updateProducts)
router.delete('/products', productMiddleware, product.deleteProducts)

module.exports = router;