const { check } = require('express-validator/check');

class ProductValidator {

    static productValidation() {

        return[
        
        check('name').custom(this.isNumber).withMessage("Nome não pode ser composto apenas por numero"),
        check('name').trim().isLength({ min: 3}).withMessage("Nome não pode ter menos que 3 caracteres" ),
        
        check('description').custom(this.isNumber).withMessage("Nome não pode ser composto apenas por numero"),
        check('description').trim().isLength({ min: 10 }).withMessage("Descrição não pode ter menos que 10 caracteres"),
        
        check('stockLevel').isInt({gt : -1}).withMessage('São aceitos somente valores inteiros positivos'),

        check('price').isFloat({gt : 0.0}).withMessage('Preço tem que ser maior que 0').isDecimal({decimal_digits:'1,2'}).withMessage("Somente são aceitos números com dois digitos após a vírgula")
        ]
    }

    static isNumber(n) {
        return isNaN(+(n));
    }

}

module.exports = ProductValidator;