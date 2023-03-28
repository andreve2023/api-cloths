const joi = require('joi');

const schemaProduct = joi.object({
    name_product: joi.string().min(4).max(50).required(),
    price: joi.number(),
    description: joi.string().min(5),
    stock: joi.number().integer().required(),
    size: joi.array(),
    freeShopping: joi.boolean(),
    discount:joi.number().integer(),
    CategoryId: joi.number().integer().required()
})

const schemaProductUpdate = joi.object({
    name_product: joi.string().min(4).max(50),
    image: joi.string().uri(),
    price: joi.number(),
    description: joi.string().min(5).max(100),
    stock: joi.number().integer(),
    freeShopping: joi.boolean(),
    discount:joi.number().integer(),
})

const schemaProductById = joi.object({
    id_product: joi.number().integer()
})

module.exports = {
    schemaProduct,
    schemaProductById,
    schemaProductUpdate
}