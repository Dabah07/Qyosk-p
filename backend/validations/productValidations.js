const joi = require('joi')

exports.createProductShema = joi.object({
    name: joi.string().required(),
    price: joi.number().required().positive(),
    description: joi.string(),

    category: joi.string().required(),

})


exports.updateProductSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required().positive(),
    description: joi.string(),

    category: joi.string().required(),

})