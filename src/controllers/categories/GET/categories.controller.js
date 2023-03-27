const {CategoryService} = require('../../../services/category.service');

const categoriesService = new CategoryService();
const getAllCategories = async (req, res, next) => {
    try {
        const categories = await categoriesService.getAllCategories();
        res.status(200).send(categories)
    }catch (e) {
        next(e)
    }
}
module.exports = {getAllCategories}