const {Products, productSchema} = require('./models/product.model');
const {Category, categorySchema} = require('./models/category.model');
const {User, userSchema} = require('./models/user.models');
const {Address, addressSchema} = require('./models/address.models');
const {CartShopping, cartShoppingSchema} = require('./models/cartShopping');

const setupModels = (sequelize) => {
    Products.init(productSchema, Products.config(sequelize));
    Category.init(categorySchema, Category.config(sequelize));
    User.init(userSchema, User.config(sequelize));
    Address.init(addressSchema, Address.config(sequelize));
    CartShopping.init(cartShoppingSchema, CartShopping.config(sequelize));


    Products.associated(sequelize.models);
    Category.associated(sequelize.models);
    User.associated(sequelize.models);
    Address.associated(sequelize.models);
    CartShopping.associated(sequelize.models)
}

module.exports = {setupModels}