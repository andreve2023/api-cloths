const {ProductServices} = require('../../../services/product.service');
const cloudinary = require('cloudinary').v2;
const {config} = require('../../../config/config');


const productService = new ProductServices();

const createProduct = async (req, res, next) => {
    try {
        // const {path} = req.file;
        // const data = JSON.parse(req.body.data)
        // const info = {
        //     ...data,
        //     image: path
        // }
        const productCreated = await productService.createProduct(req.body);
        //const productCreated = await productService.createProduct(info);
        console.log(productCreated)
        //res.status(200).send(productCreated)
    }catch (e) {
        next(e)
    }
}

module.exports = {createProduct}