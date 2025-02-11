const Joi = require('joi');

const createOrderSchema = Joi.object({
    address: Joi.string().required(),
    phone: Joi.string().required(),
    remarque: Joi.string().optional(),
    mycrts: Joi.array().items(
        Joi.object({
            productId : Joi.string().required(),
            quantity: Joi.number().required()
        })
    ).required()
});

module.exports = {
    createOrderSchema
};