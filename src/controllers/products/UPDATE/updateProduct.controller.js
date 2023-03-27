const {ProductServices} = require('../../../services/product.service');

const productsService = new ProductServices();

const updateProduct = async(req, res, next) => {
    try {
        const {id_product} = req.params;
        const producUpdate = await productsService.updateProduct(id_product, req.body)
        res.status(200).send(producUpdate)
    }catch (e) {
        next(e)
    }
}

module.exports = {updateProduct}