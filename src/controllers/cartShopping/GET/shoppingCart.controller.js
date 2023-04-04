const {CartShoppingService} = require('../../../services/cartShopping.service');

const cartService = new CartShoppingService();
const getShoppingCart = (req, res, next) => {
    try {
        const {UserId} = req.body;
        const cartShopping = cartService.getCartShopping(UserId);
        res.status(200).send(cartShopping);
    }catch (e) {
        next(e)
    }
    /*
    const getShoppingCart = (req, res, next) => {
    try {
        const {UserId} = req.body;
        const cartShopping = cartService.getCartShopping(UserId);
        res.status(200).send(cartShopping);
    }catch (e) {
        next(e)
    }
    
    
    

}    

*/

module.exports = {getShoppingCart}