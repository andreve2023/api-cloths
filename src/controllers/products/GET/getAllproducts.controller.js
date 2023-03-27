const {ProductServices} = require('../../../services/product.service');

const productsService = new ProductServices();
const getAllProducts = async (req, res, next) => {
    try {
        const allProducts =await productsService.getAllProducts();
        res.status(200).send(allProducts)
    }catch (e) {
        next(e)
    }
}
module.exports = {getAllProducts}