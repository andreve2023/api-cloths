function validarParams(req, res, next) {
    const {nameCategory} = req.params;
    if (nameCategory) {
        next()
    }else {
        res.status(400).json({message: "los parametros de la URL son incorrectos"})
    }
}

module.exports = {validarParams}