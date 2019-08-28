const mongoose = require('mongoose');
const Products = mongoose.model('Products');
const { validationResult } = require('express-validator');
const repository = require ('../repositories/products-repository');


//list
exports.listProducts = async (req, res) => {
    try{
        const data = await repository.listProducts();
        res.status(200).send(data);
    }catch (e) {
        res.status(500).send({message:'Falha ao carregar os produtos'});
    }
};

//create
exports.createProducts = async (req, res) => {
    try {

        await repository.updateProducts(req.params.id, req.body);

        res.status(200).send({ message: 'Produto cadastrado com sucesso' });

    } catch (e) {
        res.status(500).send({ message: "Falha ao cadastrar o produto", e });
    };
}

//update
exports.updateProducts = async (req, res) => {

    const {errors} = validationResult(req);

    if(errors.length > 0) {
        return res.status(400).send({messagem: errors})
    }

    try{
        await repository.updateProducts(req.params.id, req.body, (error, result) => {
            if (result) return res.status(200).send(result);
            res.status(400).send({ erro: "Produto não encontrado" });
        });
       
    }catch(e) {
        res.status(500).send({message: 'Falha ao atualizar o produto'});
    }
}

exports.deleteProducts = async (req, res) => {
    try {
        await repository.deleteProducts(req.params.id, (error, result) => {
            if(result) return res.status(200).send(result);
            res.status(400).send({ erro: "Produto não encontrado" });
        });
        
    }catch(e) {
        res.status(500).send({message: 'Falha ao remover o produto'});
    }
}