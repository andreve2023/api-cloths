const {ProductServices} = require('../../../services/product.service');

const productsService = new ProductServices();
const deleteProductById = async (req, res, next) => {
    try {
        const {id_product} = req.params;
        await productsService.deleteProductById(id_product);
        res.status(200).json({message: "Producto Elimininado correctamente"});
    }catch (e) {
        next(e)
    }
}

module.exports = {deleteProductById}