const {CategoryService} = require('../../../services/category.service');

const categoryService = new CategoryService();
const filterByCategory = async(req, res, next) => {
    try {
        const {nameCategory} = req.params;
        const products = await categoryService.filterByCategory(nameCategory);
        res.status(200).send(products);
    }catch (e) {
        next(e)
    }
}

module.exports = {filterByCategory}