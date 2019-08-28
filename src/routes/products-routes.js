const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const productsController = require('../controllers/products-controller');
const ProductsValidation = require('../validation/products-validation');

router.get('/list', productsController.listProducts);

router.post('/create', ProductsValidation.validation(), productsController.createProducts);

router.put('/update/:id', productsController.updateProducts);

router.delete('/delete/:id', productsController.deleteProducts);

module.exports = router;