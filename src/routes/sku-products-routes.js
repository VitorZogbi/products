const express = require('express');
const router = express.Router();
const SKUProductsController = require('../controllers/sku-products-controller');
const ProductValidation = require('../validation/sku-product-validation');
const IdValidation = require('../validation/id-validation');

router.post('/create', ProductValidation.productValidation(), SKUProductsController.createProduct);

router.get('/list', SKUProductsController.listProducts);

router.get('/findbyid/:id', IdValidation.validateId(), SKUProductsController.findProductById);

router.put('/update/:id', IdValidation.validateId(), SKUProductsController.updateProduct);

router.put('/createsku/:id', SKUProductsController.createSku);

module.exports = router;