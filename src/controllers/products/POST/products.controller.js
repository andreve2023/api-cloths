const {ProductServices} = require('../../../services/product.service');

const productService = new ProductServices();
const createProduct = async (req, res, next) => {
    try {
        const productCreated = await productService.createProduct(req.body);
        res.status(200).send(productCreated)
    }catch (e) {
        next(e)
    }
}

module.exports = {createProduct}