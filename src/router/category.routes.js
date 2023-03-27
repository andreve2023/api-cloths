const {Router} = require('express');
const passport = require("passport");
const {getAllCategories} = require('../controllers/categories/GET/categories.controller');
const {createCategory} = require('../controllers/categories/POST/categories.controller');
const {filterByCategory} = require('../controllers/categories/GET/getProductsByCategory.controller');
const {validatorHandlers} = require('../middlewares/validatorHandler');
const {schemaCategory} = require('../schemas/category.schema');
const router = Router();

router.get('/', getAllCategories);
router.get('/filter-category/:nameCategory', filterByCategory);
router.post('/',
    passport.authenticate('jwt', {session: false}),
    validatorHandlers(schemaCategory, 'body') ,
    createCategory
);


module.exports = router;