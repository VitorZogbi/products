const express = require('express');
const router = express.Router();
const sku = require('../controllers/sku-controller');

const skuValidation = require('../validation/sku-validation');

router.post('/create', skuValidation.skuValidation(), sku.createSku);

router.get('/list', sku.listSku)

module.exports = router;