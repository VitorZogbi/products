const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');

router.get('/', productsController.listProducts);
router.post('/', productsController.createProducts);

module.exports = router;