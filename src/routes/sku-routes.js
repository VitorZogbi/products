const express = require('express');
const router = express.Router();
const sku = require('../controllers/sku-controller');
const idValidation = require('../validation/id-validation');
const SkuValidation = require('../validation/sku-validation');

router.post('/', SkuValidation.skuValidation(), sku.createSku);

router.get('/', sku.listSku);

router.get('/listpaginated/:page', sku.listPaginated);

router.get('/:id', idValidation.validateId(), sku.findSkuById);

router.put('/:id', idValidation.validateId(), SkuValidation.skuValidation(), sku.updateSku);

router.delete('/:id', idValidation.validateId(), sku.deleteSku);

module.exports = router;