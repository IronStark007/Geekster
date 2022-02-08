cart = express.Router();
cartMiddleware = require('../middlewares/cart')
cartController = require('../controllers/cart')

cart.get('/', cartMiddleware, cartController.getCarts)

module.exports = cart;