const Order = require('../models/Order');
const Product = require('../models/Product');

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({}).populate('mycarts.product');
        return res.json(orders.map(order => (order)));
    } catch (e) {
        next(e);
    }
};


exports.getOrders = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)
        return res.json(order)
    } catch (e) {
        next(e)
    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: 'oredr not found' })
        }

        await order.deleteOne()

    } catch (err) {
        next(e)
    }
};

exports.createOrder = async (req, res, next) => {
    try {
        let totalPrice = 0
        for (const mycart of req.body.mycrts) {
            const product = await Product.findById(mycart.productId)
       
            totalPrice += product.price * mycart.quantity
        }

        const order = await Order.create({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            mycarts: req.body.mycrts,
            totalPrice: totalPrice,
            date: new Date(),
        })

        return res.status(201).json(order)
    } catch (e) {
        next(e)
    }
   
};