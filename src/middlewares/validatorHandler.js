const boom = require('@hapi/boom');

function validatorHandlers(schema, property) {
    // return function (req, res, next){
    //     const data = req[property];
    //     const {error} = schema.validate(data, {abortEarly: false});
    //     if (error) next(boom.badRequest(error));
    //     next()
    // }
    return function (req, res, next){
        if (!property){
            const data = JSON.parse(req.body.data);
            const {error} = schema.validate(data, {abortEarly: false});
            if (error) next(boom.badRequest(error));
            next()
        }else {
            const data = req[property];
            const {error} = schema.validate(data, {abortEarly: false});
            if (error) next(boom.badRequest(error));
            next()
        }
    }
}
module.exports = {validatorHandlers}