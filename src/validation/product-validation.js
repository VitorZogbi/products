const { check } = require('express-validator/check');

class ProductValidator {

    static productValidation() {

        return[
        check('name').isLength({ min: 3}).withMessage("Nome não pode ter menos que 3 caracteres" ),

        check('description').isLength({ min: 10 }).withMessage("Descrição não pode ter menos que 10 caracteres"),

        check('stockLevel').isInt({gt : -1}).withMessage('Quantidade não pode ser 0'),

        check('price').isFloat({gt : 0.0}).withMessage('Preço tem que ser maior que 0')
        ]
    }
}
    

module.exports = ProductValidator;