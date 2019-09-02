const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');
const Validator = require('../validation/product-validation');

router.get('/list', productsController.listProducts);

router.get('/findbyid/:id', productsController.findProductById);

router.get('/findbyname/:name', productsController.findProductByName);

//price lower or equal
router.get('/findbyprice/:price', productsController.findProductByPrice);

router.post('/create', Validator.productValidation(), productsController.createProduct);

router.put('/update/:id', Validator.productValidation(), productsController.updateProduct);

router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;