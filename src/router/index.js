const {Router} = require('express');
const routerProduct = require('./product.router');
const routerCategories = require('./category.routes');
const routerUsers = require('./user.routes');
const routerAuth = require('./auth.router');
const routes = (app) => {
    const router = Router();
    app.use('/api/v1', router)
    router.use('/products', routerProduct);
    router.use('/categories', routerCategories);
    router.use('/user', routerUsers)
    router.use('/auth', routerAuth)
}

module.exports = {routes}