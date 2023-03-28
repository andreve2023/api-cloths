const {Router} = require('express');
const {getAllProducts} = require('../controllers/products/GET/getAllproducts.controller');
const {getProductById} = require('../controllers/products/GET/getByIdProducts.controller');
const {createProduct} = require('../controllers/products/POST/products.controller');
const {deleteProductById} = require('../controllers/products/DELETE/deleteProduct.controller');
const {updateProduct} = require('../controllers/products/UPDATE/updateProduct.controller');
const {searchProductByName} = require('../controllers/products/GET/searchProduct.controller');
const {orderByNameProduct} = require('../controllers/products/GET/orderByName.controller');
const {orderProductByPrice} = require('../controllers/products/GET/orderByPrice.controller');
const {validatorHandlers} = require('../middlewares/validatorHandler');
const upload = require('../middlewares/multer');
const {schemaProduct, schemaProductById, schemaProductUpdate} = require('../schemas/product.schema');
const router = Router();


router.get('/', getAllProducts);
router.get('/search-product', searchProductByName);
router.get('/order-products/:value_order', orderByNameProduct);
router.get('/order-by-price/:order_price', orderProductByPrice);

router.get('/:id_product',
    validatorHandlers(schemaProductById, 'params') ,
    getProductById
);
router.post('/',
    upload.single('image'),
    validatorHandlers(schemaProduct),
    createProduct
);
router.delete('/delete_product/:id_product',
    validatorHandlers(schemaProductById, 'params') ,
    deleteProductById
);

router.put('/update-product/:id_product',
    validatorHandlers(schemaProductUpdate, 'body'),
    updateProduct
);

// router.post('/',upload.single('image'),(req, res) => {
//     // const data = JSON.parse(req.body.data);
//     // const {name_product} = req.body;
//     // console.log(name_product);
//     // console.log(file);
// });
module.exports = router;