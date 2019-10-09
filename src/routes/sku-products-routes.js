const express = require('express');
const router = express.Router();
const SKUProductsController = require('../controllers/sku-products-controller');
const ProductValidation = require('../validation/sku-product-validation');
const IdValidation = require('../validation/id-validation');

router.post('/', ProductValidation.productValidation(), SKUProductsController.createProduct);

router.get('/', SKUProductsController.listProducts);

router.get('/:page', SKUProductsController.listPaginated);

router.get('/findbyid/:id', IdValidation.validateId(), SKUProductsController.findByProductId);

router.put('/:id', IdValidation.validateId(), ProductValidation.productValidation(), SKUProductsController.updateProduct);

router.delete('/:id', IdValidation.validateId(), SKUProductsController.deleteProduct);

module.exports = router;