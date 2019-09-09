const express = require('express');
const router = express.Router();
const SKUProductsController = require('../controllers/sku-products-controller');

router.post('/create', SKUProductsController.createProduct);

router.get('/list', SKUProductsController.listProducts);

router.get('/findbyid/:id', SKUProductsController.findProductById);

module.exports = router;