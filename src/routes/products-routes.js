const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');
const ProductValidation = require('../validation/product-validation');
const IdValidation = require('../validation/id-validation');

router.get('/list', productsController.listProducts);

router.get('/findbyid/:id', IdValidation.validateId(), productsController.findProductById);

router.get('/findbyname/:name', productsController.findProductByName);

//price lower or equal
router.get('/findbyprice/:price', productsController.findProductByPrice);

router.post('/create', ProductValidation.productValidation(), productsController.createProduct);

router.put('/update/:id', IdValidation.validateId(), ProductValidation.productValidation(), productsController.updateProduct);

router.delete('/delete/:id', IdValidation.validateId(), productsController.deleteProduct);

module.exports = router;