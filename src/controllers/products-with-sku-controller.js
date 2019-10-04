const { validationResult } = require('express-validator');
const repository = require('../repositories/products-with-sku-repository');

exports.createProductWithSku = async (req, res) => {

    const {errors} = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.createProductwithSku(req.body, (error, result) => {
        if (result) return res.status(201).send(result);
        return res.status(404).send({ erro: "Produto não criado", error })
            
    }).catch(error => { res.status(500).send({ message: 'Falha ao criar o produto', error });});
}

exports.createSkuInProduct = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.createSku( req.params.id, req.body, (error, result) => {
        
        if (result) return res.status(201).send(result);
        return res.status(404).send({ erro: "Sku não criada", error })

    }).catch(error => { res.status(500).send({ message: 'Falha ao criar a sku', error }) });

}

exports.listProductWithSku = async (req, res) => {
    
    try {
        const data = await repository.listProductWithSku();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar os produtos', e });
    }
}

exports.findbyId = async (req, res) => {

    const {errors} = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.findbyId(req.params.id, (errors, result) => {

        if(result) return res.status(200).send(result);
        return res.status(404).send({ erro: "Produto não encontrado", errors })
    }).catch(error => { res.status(500).send({ message: 'Falha ao encontrar o produto', error})})
} 

exports.update = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.updateProduct(req.params.id, req.body, (errors, result) => {

        if (result) return res.status(200).send(result);
        return res.status(404).send({ erro: "Produto não atualizado", errors })
    }).catch(error => { res.status(500).send({ message: 'Falha ao atualizar o produto', error })});

}

exports.updateSku = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.updateSku(req.params.id, req.body, (errors, result) => {

        if (result) return res.status(200).send(result);
        return res.status(404).send({ erro: "Sku não atualizada", errors })
    }).catch(error => { res.status(500).send({ message: 'Falha ao atualizar a sku', error }) })
      
}

exports.delete = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.delete(req.params.id, (errors, result) => {

        if (result) return res.status(200).send(result);
        return res.status(404).send({ erro: "Produto não apagado", errors })
    }).catch(error => { res.status(500).send({ message: 'Falha ao encontrar o produto', error }) })
}

exports.deleteSku = async (req, res) => {

    const { errors } = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    await repository.deleteSku(req.params.id, (errors, result) => {

        if (result) return res.status(200).send(result);
        return res.status(404).send({ erro: "Sku não apagada", errors })
    }).catch(error => { res.status(500).send({ message: 'Falha ao encontrar a sku', error }) })
}