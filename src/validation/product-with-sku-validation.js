const { check } = require('express-validator');

class ProductWithSku {

    static isNumber(n) {
        return isNaN(+(n));
    }
    
    static productValidation() {
        return [

            check('name').custom(this.isNumber).withMessage("Nome não pode ser composto apenas por numero"),
            check('name').trim().isLength({ min: 3 }).withMessage("Nome não pode ter menos que 3 caracteres"),

            check('description').custom(this.isNumber).withMessage("Descrição não pode ser composto apenas por numero"),
            check('description').trim().isLength({ min: 10 }).withMessage("Descrição não pode ter menos que 10 caracteres"),

        ]
    }

    static skuValidation() {
        return [

            check('color').trim().isLength({ min: 1 }).withMessage("Tamanho não pode ter menos que 1 caractere"),
            check('size').trim().isLength({ min: 1 }).withMessage("Tamanho não pode ter menos que 1 caractere"),

            check('price').isFloat({ gt: 0.0 }).withMessage('Preço tem que ser maior que 0').isDecimal({ decimal_digits: '1,2' }).withMessage("Somente são aceitos números com dois digitos após a vírgula"),
            check('stockLevel').isInt({ gt: -1 }).withMessage('São aceitos somente valores inteiros positivos'),
        ]
    }
}

module.exports = ProductWithSku;