const {ProductServices} = require('../../../services/product.service');

const productsService = new ProductServices();
const searchProductByName = async(req, res, next) => {
    try {
        const {name_product} = req.query;
        const productsFind = await productsService.searchByName(name_product);
        res.status(200).send(productsFind)
    }catch (e) {
        next(e)
    }
}

module.exports = {searchProductByName}