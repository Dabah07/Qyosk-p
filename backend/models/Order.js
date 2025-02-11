const mongoose = require('mongoose');

module.exports = mongoose.model('Order', {
    remarque: String,
    phone: String,
    address: String,
    mycarts: [
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
            quantity: Number
        }
    ],
    totalPrice: Number,
    date: Date
})