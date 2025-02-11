const exprss = require('express');
const orderController = require('../controllers/orderController');
const orderValidation = require('../validations/ordervalidation')
const atheMiddelware = require('../Middelware/authMiddelware')
const {createOrderSchema} = require('../validations/ordervalidation');   
const validationMiddelware = require('../Middelware/validationMiddelware');
const validObjectIdMiddleware = require('../Middelware/validObjectIdMiddleware');
const router = exprss.Router()

router.get('/orders',atheMiddelware, orderController.getAllOrders)
router.get('/orders/:id',atheMiddelware,validObjectIdMiddleware, orderController.getOrders)
router.delete('/orders/:id',atheMiddelware, orderController.deleteOrder)
router.post('/orders',validationMiddelware(createOrderSchema),orderController.createOrder)

module.exports = router