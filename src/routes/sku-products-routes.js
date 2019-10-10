const express = require('express');
const router = express.Router();
const SKUProductsController = require('../controllers/sku-products-controller');
const ProductValidation = require('../validation/sku-product-validation');
const IdValidation = require('../validation/id-validation');

router.post('/create', ProductValidation.productValidation(), SKUProductsController.createProduct);

router.get('/list', SKUProductsController.listProducts);

router.get('/listpaginated/:page', SKUProductsController.listPaginated);

router.get('/findbyid/:id', IdValidation.validateId(), SKUProductsController.findByProductId);

router.put('/update/:id', IdValidation.validateId(), ProductValidation.productValidation(), SKUProductsController.updateProduct);

router.delete('/delete/:id', IdValidation.validateId(), SKUProductsController.deleteProduct);

module.exports = router;