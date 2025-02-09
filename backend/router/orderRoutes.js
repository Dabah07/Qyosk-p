const exprss = require('express');
const orderController = require('../controllers/orderController');


const router = exprss.Router()

router.get('/orders', orderController.getAllOrders)
router.get('/orders/:id', orderController.getOrders)
router.delete('/orders/:id', orderController.deleteOrder)
router.post('/orders',orderController.createOrder)

module.exports = router