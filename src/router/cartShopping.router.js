const {Router} = require('express');
const {getShoppingCart} = require('../controllers/cartShopping/GET/shoppingCart.controller');
const {createCartShopping} = require('../controllers/cartShopping/POST/createCarShopping.controller')
const router = Router();

router.get('/shopping-cart', getShoppingCart);
router.post('/add-to-cart', createCartShopping)

module.exports=router