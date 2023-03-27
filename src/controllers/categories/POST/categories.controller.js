const {CategoryService} = require('../../../services/category.service');

const categoriesService = new CategoryService();
const createCategory = async(req, res, next) => {
    try {
        const category = await categoriesService.createCategory(req.body);
        res.status(200).send(category);
    }catch (e) {
        next(e)
    }
}

module.exports = {createCategory}