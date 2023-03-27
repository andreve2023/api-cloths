const {ProductServices} = require('../../../services/product.service');

const serviceProducts = new ProductServices();
const orderProductByPrice = async (req, res, next) => {
    try {
        const { order_price } = req.params;
        const productOrder = await serviceProducts.orderByPrice(order_price);
        res.status(200).send(productOrder);
    }catch (e) {
        next(e)
    }
}

module.exports = {orderProductByPrice}