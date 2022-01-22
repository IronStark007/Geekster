const router = express.Router();
const product = require('../controller/employee')
const middleware = require('../middlewares/employee');


router.get('/', product.getAllEmployees);
router.post('/', middleware, product.createEmployee);
router.put('/', middleware, product.updateEmployee);
router.delete('/', product.deleteEmployee);


module.exports = router;