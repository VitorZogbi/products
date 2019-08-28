const { check } = require('express-validator');

class Product {

    static validation(){
        return [
            check('name').trim().isLength({ min: 2 }).withMessage("O nome precisa ter no mínimo 3 caracteres."),
            check('desc').trim().isLength({ min: 7, max: 100 }).withMessage("A descrição precisa ter no mínimo 7 caracteres e no máximo 100"),
            check('amount').isNumeric().withMessage("O campo amount precisa ser um número"),
            check('price').isNumeric().withMessage("O campo price precisa ser um número")
        ]
    }
    
} 

module.exports = Product;
