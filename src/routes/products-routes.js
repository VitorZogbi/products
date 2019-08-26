const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');

router.get('/list', productsController.listProducts);
router.post('/create', productsController.createProducts);

module.exports = router;