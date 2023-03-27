const {ProductServices} = require('../../../services/product.service');

const productsService = new ProductServices();
const getProductById = async(req, res, next) => {
    try {
        const {id_product} =req.params
        const product = await productsService.findProductById(id_product);
        res.status(200).send(product)
    }catch (e) {
        next(e)
    }
}

module.exports = {getProductById}
