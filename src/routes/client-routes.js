const express = require('express');
const Router = express.Router();
const 


// const express = require('express');
// const router = express.Router();
// const { check } = require('express-validator');
// const productsController = require('../controllers/products-controller');

// router.get('/list', productsController.listProducts);

// router.post('/create', [
//     check('name').trim().isLength({ min: 2 }).withMessage("O nome precisa ter no mínimo 3 caracteres."),
//     check('desc').trim().isLength({ min: 7, max: 100 }).withMessage("A descrição precisa ter no mínimo 7 caracteres e no máximo 100"),
//     check('amount').isNumeric().withMessage("O campo amount precisa ser um número"),
//     check('price').isNumeric().withMessage("O campo price precisa ser um número")
// ], productsController.createProducts);

// router.put('/update/:id', productsController.updateProducts);

// router.delete('/delete/:id', productsController.deleteProducts);

// module.exports = router;