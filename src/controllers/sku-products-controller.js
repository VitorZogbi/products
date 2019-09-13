const { validationResult } = require ('express-validator');
const repository = require ('../repositories/sku-products-repository');

//create
exports.createProduct = async (req, res) => {

    const errors = validationResult(req);

    if (errors.length > 0) return res.status(422).send({message: errors});

    try {

        await repository.createProduct(req.body);

        res.status(200).send({message: "Produto cadastrado com sucesso"})
    }catch(error) {
        res.status(500).send({ message: "Não foi possível cadastrar o produto", error: error.message});
    };

};

exports.listProducts = async (req, res) => {
    
    try {
        const data = await repository.listProducts();
        return res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: "Não foi possível consultar os produtos", error: error.message });
    }
};

exports.findProductById = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });
    
        try {
            await repository.findProductById(req.params.id, (error, result) => {
                if (result) return res.status(200).send({ message: "Produto encontrado", result });
                if (error) return res.status(500).send({ message: "Produto não encontrado", erro: error.message });
                return res.status(404).send({ message: "Produto não encontrado", error });
            });
        } catch (e) {
            res.status(500).send({ message: 'Falha ao encontrar o produto', e });
        }
}

exports.updateProduct = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try {
        await repository.updateProduct(req.params.id, req.body, (error, result) => {
      
            if (result) return res.status(200).send({ message: "Produto atualizado", result });
            if (error) return res.status(500).send({ message: "Produto não pode ser atualizado", erro: error.message });
            return res.status(404).send({ message: "Produto não pode ser atualizado", error });
            });
        } catch (e) {
            res.status(500).send({ message: 'Falha ao encontrar o produto', e });
    }
};

exports.deleteProduct = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try {
        await repository.deleteProduct(req.params.id, (error, result) => {
            if (result) return res.status(204).send({ message: "Produto apagado com sucesso", result });
            if (error) return res.status(500).send({ erro: error.message });
            return res.status(404).send({ erro: "Produto não encontrado", error });
        })
    } catch (error) {
        res.status(500).send({ message: "Não foi possível apagar o produto desejado", error: error.message });
    }

};