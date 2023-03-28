const {models} = require('../libs/conexion');
const boom = require("@hapi/boom");
const {Op} = require("sequelize");

class ProductServices {
    async getProducts() {
        return await models.Products.findAll();
    }
    async getAllProducts() {
        return await models.Products.findAll({
            include: [
                {
                    model: models.Category
                }
            ]
        });
    }
    async createProduct(body) {
        const {name_product, image} = body;
        const getProductsDb = await models.Products.findAll();
        const productFound = getProductsDb.find(product => {
            return product.name_product === name_product || product.image === image
        });
        if (productFound){
            throw new boom.conflict("El producto ya se encuentra Ingresado")
        }else {
            return models.Products.create(body);
        }
    }
    async findProductById(id){
        let product = await models.Products.findOne({
            where: {id: id},
            include: [
                {
                    model: models.Category
                }
            ]
        });
        if (product){
            return product
        }else {
            throw new boom.notFound("No se ha encontrado el producto")
        }
    }
    async deleteProductById(id) {
        const productFind = await this.findProductById(id);
        if (!productFind){
            throw new boom.notFound("Prodicto no encontrado");
        }else {
            return await productFind.destroy();
        }
    }
    async updateProduct(id, body) {
        const productFind = await this.findProductById(id);
        if (!productFind){
            throw new boom.notFound("Producto no encontrado");
        }else {
            return await productFind.update(body);
        }

    }
    async searchByName(name_product) {
        const productsFind = await models.Products.findAll({
            where: {
                name_product: {
                    [Op.iLike]:`%${name_product}%`
                }
            }
        })
        if (!productsFind) {
            throw new boom.notFound("Productos no encontrados")
        }else {
            return productsFind
        }
    }
    async orderByName(value) {
        const allProducts = await this.getProducts();
        value === 'A-Z' ?
            allProducts.sort((a,b)=> {
                if (a.name_product > b.name_product) return 1
                if (b.name_product > a.name_product) return -1
                return 0
            }):
            allProducts.sort((a,b) => {
                if (a.name_product > b.name_product) return -1
                if (b.name_product > a.name_product) return 1
                return 0
            })
        return allProducts
    }
    async orderByPrice(value) {
        const products = await models.Products.findAll();
        value === 'ASC' ?
            products.sort((a,b)=> {
                if (a.name_product > b.name_product) return 1
                if (b.name_product > a.name_product) return -1
                return 0
            }):
            products.sort((a,b) => {
                if (a.name_product > b.name_product) return -1
                if (b.name_product > a.name_product) return 1
                return 0
            })
        return products
    }
}

module.exports = {ProductServices}