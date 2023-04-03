const {models} = require('../libs/conexion');
const boom = require('@hapi/boom');
const {UserService} = require('./user.service');
const {ProductServices} = require('./product.service');
const userService = new UserService();
const productService = new ProductServices()
class CartShoppingService {
    async getCartShopping(userId) {
        const user = await userService.findUserById(userId);
        if (!user) throw new boom.notFound("Usuario no encontrado")
        else return user
    }
    async addToCart(body){
        const {UserId, ProductId, quantity} = body
        const user = await userService.findUserById(UserId);
        const product = await productService.findProductById(ProductId);
        if (!user) throw new boom.notFound("Usuario no encontrado");
        if (!product) throw new boom.notFound("producto no encontrado");
        return await models.CartShopping.create({quantity});
    }
}

module.exports ={CartShoppingService}