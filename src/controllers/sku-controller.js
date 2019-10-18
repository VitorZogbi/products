const { validationResult } = require ('express-validator');
const repository = require ('../repositories/sku-repository');

exports.createSku = async (req, res) => {
    
    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: "Erro com os dados da sku", error: errors });

    try {
        console.log('controller');

        await repository.createSku( req.get('productId'), req.body, (error, result) => {
            if (result) return res.status(201).send(result);
            res.status(404).send({ erro: "SKU não criada", error });
        })
        
    }catch (error) {
        return res.status(500).send({ message: "Não foi possível cadastrar o produto", error: error.message });
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

    if (errors.length > 0) return res.status(422).send({ message: "Erro com a id", error: errors });

    try {
        await repository.findSkuById(req.params.id, (error, result) => {
            if (result) return res.status(200).send({ message: "Sku encontrada", result });
            if (error) return res.status(500).send({ message: "Falha ao encontrar a sku", erro: error.message });
            return res.status(404).send({ message: "Sku não encontrada", error });
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar a sku', e });
    }
}

exports.updateSku = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: "Erro com os dados da sku", error: errors });

    try {
        await repository.updateSku(req.params.id, req.body, (error, result) => {
            if (result) return res.status(201).send({ message: "Sku editada com sucesso", result });
            if (error) return res.status(500).send({ message: "Não foi possível editar a Sku", erro: error.message });
            return res.status(404).send({ message: "Sku não encontrada", error });
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar a sku', e });
    }
}

exports.deleteSku = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: "Erro com a id", error: errors });

    try {
        await repository.deleteSku(req.params.id, (error, result) => {
            if (result) return res.status(204).send({ message: "Sku apagada", result });
            if (error) return res.status(500).send({ message: "Não foi possível apagar a Sku", erro: error.message });
            return res.status(404).send({ message: "Sku não encontrada", error });
        })
    }catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar a sku', e });
    }
}

exports.listPaginated = async (req, res) => {

    await repository.listPaginated(req.params.page, (error, result) => {
        if (result.docs.length === 0) return res.status(206).send({ message: "Nenhuma sku encontrada", result });
        if (error) return res.status(500).send({ erro: error.message });
        return res.status(200).send({
            message: "Produto(s) encontrado(s)", result});
    }).catch(err => {
        res.status(500).send({ message: 'Falha ao listar as skus', err });
    });
}