const { validationResult } = require ('express-validator');
const repository = require ('../repositories/sku-tshirts-repository');

exports.createTshirt = async (req, res) => {
    const errors = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try {

        

    }catch (e) {
        return res.status(422).send({ message: "Não foi possível cadastrar o produto", error: error.message });
    }
}