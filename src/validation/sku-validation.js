const { check } = require('express-validator');

class SkuValidator {

    static skuValidation() {

        return [

            check('color').custom(this.isNumber).withMessage("Nome não pode ser composto apenas por numero"),
            check('size').trim().isLength({ min: 2 }).withMessage("Nome não pode ter menos que 3 caracteres"),

            check('price').isFloat({ gt: 0.0 }).withMessage('Preço tem que ser maior que 0').isDecimal({ decimal_digits: '1,2' }).withMessage("Somente são aceitos números com dois digitos após a vírgula"),
            check('stockLevel').isInt({ gt: -1 }).withMessage('São aceitos somente valores inteiros positivos'),
        ]
    }

}

module.exports = SkuValidator;