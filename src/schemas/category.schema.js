const joi = require('joi');

const schemaCategory = joi.object({
    name_category: joi.string().min(4).max(50).required(),
    image_category: joi.string().uri()
})


module.exports = {schemaCategory}