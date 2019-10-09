const express = require('express');
const router = express.Router();
const productsWithSkuController = require('../controllers/products-with-sku-controller');
const ProductWithSkuValidation = require('../validation/product-with-sku-validation');
const IdValidation = require('../validation/id-validation');

router.post('/createproduct', ProductWithSkuValidation.productValidation(), productsWithSkuController.createProductWithSku);

router.post('/createsku/:id', IdValidation.validateId(), ProductWithSkuValidation.skuValidation(), productsWithSkuController.createSkuInProduct);

router.put('/update/:id', IdValidation.validateId(), ProductWithSkuValidation.productValidation(), productsWithSkuController.update);

router.put('/updatesku/:id', IdValidation.validateId(), ProductWithSkuValidation.skuValidation(), productsWithSkuController.updateSkuInProducts);

router.get('/', productsWithSkuController.listProductWithSku);

router.get('/:page', productsWithSkuController.listProductsWithSkuPaginated);

router.get('/findbyid/:id', IdValidation.validateId(), productsWithSkuController.findById);

router.delete('/delete/:id', IdValidation.validateId(), productsWithSkuController.delete);

router.delete('/deletesku/:id', IdValidation.validateId(), productsWithSkuController.deleteSkuInProduct);

module.exports = router;