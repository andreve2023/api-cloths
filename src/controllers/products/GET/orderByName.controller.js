const {ProductServices} = require('../../../services/product.service');

const productsService = new ProductServices();
const orderByNameProduct = async(req, res, next) => {
    try {
        const {value_order} = req.params
        const productsOrders = await productsService.orderByName(value_order);
        res.status(200).send(productsOrders)
    }catch (e) {
        next(e)
    }
}
module.exports = {orderByNameProduct}