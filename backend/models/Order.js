const mongoose = require('mongoose');

module.exports = mongoose.model('Order',{
    name:String,
    price : Number,
    description : String,
    image : String,
    category : String,
    phone : String,
    aderss : String,
    remarque : String,

    

})