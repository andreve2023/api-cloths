const {models} = require('../libs/conexion');
const boom = require('@hapi/boom');
class CategoryService {
    async getAllCategories() {
        return await models.Category.findAll();
    }
    async createCategory(body) {
        return models.Category.create(body);
    }
    async filterByCategory(nameCategory) {
        const products = await models.Category.findAll({
            where: {name_category : nameCategory},
            include: [
                {
                    model: models.Products
                }
            ]
        })
        if (products.length ===0){
            throw new boom.notFound("Producto no encontrado")
        }else {
            return products;
        }
    }
}

module.exports = {CategoryService}