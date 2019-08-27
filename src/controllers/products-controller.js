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
    
    const{errors} = validationResult(req);
    if(errors.length > 0) {
        return res.status(400).send({message: errors});
    }
    try {
        await repository.createProducts({
            name: req.body.name,
            desc: req.body.desc,
            amount: req.body.amount,
            price: req.body.price
        });
        
        res.status(201).send({message: 'Produto cadastrado com sucesso'});

    }catch(e) {
        res.status(500).send({message: "Falha ao cadastrar o produto", e});
    }; 
}

//update não esta ok
exports.updateProducts = async (req, res) => {

    const {errors} = validationResult(req);

    if(error.length > 0) {
        return res.status(400).send({messagem: errors})
    }
    try{
        await repository.updateProducts(req.params.id, req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso' });
    }catch(e) {
        res.status(500).send({message: 'Falha ao atualizar o produto'});
    }
}

exports.deleteProducts = async (req, res) => {
    try {
        await repository.deleteProducts(req.params.id, (error, result) => {
            if(result) return res.status(200).send({mensagem: "Produto apagado com sucesso"});
            res.status(400).send({ error: 'Produto não encontrado!' })
        });
        
    }catch(e) {
        res.status(500).send({message: 'Falha ao remover o produto'});
    }
}