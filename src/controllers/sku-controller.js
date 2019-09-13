const { validationResult } = require ('express-validator');
const repository = require ('../repositories/sku-repository');

exports.createSku = async (req, res) => {
    
    const errors = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try {

        await repository.createSku(req.body, (error, result) => {
            if (result) return res.status(200).send(result);
            res.status(404).send({ erro: "SKU não criada" }, error);
        })
        
    }catch (e) {
        return res.status(422).send({ message: "Não foi possível cadastrar o produto", error: error.message });
    }
};

exports.listSku = async (req, res) => {

    try {
        const data = await repository.listSku();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as skus', e });
    }
};

exports.findSkuById = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try {
        await repository.findSkuById(req.params.id, (error, result) => {
            if (result) return res.status(200).send({ message: "Produto encontrado", result });
            if (error) return res.status(500).send({ message: "Produto não encontrado", erro: error.message });
            return res.status(404).send({ message: "Produto não encontrado", error });
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar o produto', e });
    }
}

exports.findProductById = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try{
        await repository.findProductById(req.params.id, (error, result) => {
            if (result) return res.status(200).send({ message: "Produto encontrado", result });
            if (error) return res.status(500).send({ message: "Produto não encontrado", erro: error.message });
            return res.status(404).send({ message: "Produto não encontrado", error });
        })
    }catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar o produto', e });
    }
}