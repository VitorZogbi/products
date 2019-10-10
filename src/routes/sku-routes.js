const express = require('express');
const router = express.Router();
const sku = require('../controllers/sku-controller');
const idValidation = require('../validation/id-validation');
const SkuValidation = require('../validation/sku-validation');

router.post('/create', SkuValidation.skuValidation(), sku.createSku);

router.get('/list', sku.listSku);

router.get('/listpaginated/:page', sku.listPaginated);

router.get('/findbyid/:id', idValidation.validateId(), sku.findSkuById);

router.put('/update/:id', idValidation.validateId(), SkuValidation.skuValidation(), sku.updateSku);

router.delete('/delete/:id', idValidation.validateId(), sku.deleteSku);

module.exports = router;