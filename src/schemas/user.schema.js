const joi = require('joi');

const userSchema = joi.object({
    fullName: joi.string().min(5).required(),
    email: joi.string().email().required(),
    password: joi.string().min(7).max(10).required(),
    image: joi.string(),
    cellPhone: joi.number()
})

module.exports = {userSchema}