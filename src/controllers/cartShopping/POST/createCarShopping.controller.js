const {CartShoppingService} = require('../../../services/cartShopping.service');

const serviceCart = new CartShoppingService();

const createCartShopping = (req, res, next) => {
    try {
        const cartShopping = serviceCart.addToCart(req.body);
        res.status(200).send(cartShopping);
    }catch (e) {
        next(e)
    }
}

module.exports = {createCartShopping}