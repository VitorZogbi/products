const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');

router.get('/list', productsController.listProducts);

router.get('/find/:id', productsController.findProduct);

router.post('/create', productsController.createProduct);

router.put('/update/:id', productsController.updateProduct);

router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;