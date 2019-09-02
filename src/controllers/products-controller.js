const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const repository = require ('../repositories/products-repository');

//list
exports.listProducts = async (req, res) => {
    try{
        const data = await repository.listProducts();
        res.status(200).send(data);
    }catch (e) {
        res.status(500).send({message:'Falha ao carregar os produtos', e});
    }
};

//create
exports.createProduct = async (req, res) => {
    try {

        const { errors } = validationResult(req);

        if (errors.length > 0) return res.status(422).send({ message: errors });
        
        // if (req.body.name.length < 3) return res.status(422).send({ message: "Nome não pode ter menos que 3 caracteres"});

        // if (req.body.description.length < 7) return res.status(422).send({ message: "Descrição não pode ter menos que 10 caracteres" })
       
        // if (req.body.price <= 0) return res.status(422).send({message:'Preço não pode ser 0 ou negativo'});
    
        // if (req.body.stockLevel < 0) return res.status(422).send({message:'Quantidade não pode ser menor que 0'});    

        await repository.createProducts(req.body);

        res.status(200).send({ message: 'Produto cadastrado com sucesso' });

    } catch (e) {
        res.status(500).send({ message: "Não foi possível cadastrar o produto", error: e.message });
    };
}

//update
exports.updateProduct = async (req, res) => {

    const { errors } = validationResult(req);
    
    if (errors.length > 0) return res.status(422).send({message: errors});

    // if (req.body.name.length < 3) return res.status(422).send({ message: "Nome não pode ter menos que 3 caracteres" });

    // if (req.body.description.length < 7) return res.status(422).send({ message: "Descrição não pode ter menos que 10 caracteres" })

    // if (req.body.price <= 0) return res.status(422).send({ message: 'Preço não pode ser 0 ou negativo' });

    // if (req.body.stockLevel < 0) return res.status(422).send({ message: 'Quantidade não pode ser menor que 0' }); 

    try{
        await repository.updateProducts(req.params.id, req.body, (error, result) => {
            if (result) return res.status(200).send(result);
            res.status(400).send({ erro: "Produto não encontrado" }, error);
        });
       
    }catch (e) {
        res.status(500).send({message: 'Falha ao atualizar o produto'}, e);
    }
}

//delete
exports.deleteProduct = async (req, res) => {
    
    try {    
        await repository.deleteProducts(req.params.id, (error, result) => {
            if (result) return res.status(200).send({ message: "Produto apagado com sucesso", result });
            if (error) return res.status(500).send({ erro: error.message});
            res.status(404).send({ error: "Produto não encontrado" });
        });
        
    }catch(e) {
        res.status(500).send({message: 'Falha ao remover o produto', e });
    }
}

//find
exports.findProductById = async (req, res) => {

    try {
        await repository.findProductById(req.params.id, (error, result) => {
            if (result) return res.status(200).send( { message: "Produto encontrado", result });
            if (error) return res.status(500).send({ erro: error.message });
            res.status(404).send({ error: "Produto não encontrado", error});
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar o produto', e });
    }
}

//findByName
exports.findProductByName = async (req, res) => {

    try {
        await repository.findProductByName(req.params.name, (error, result) => {
            if (result.length === 0 ) return res.status(404).send({ message: "Nenhum produto encontrado", result});
            if (error) return res.status(500).send ({ erro: error.message });
            return res.status(200).send({ error: "Produto(s) encontrado(s)", result });
    });
    } catch (e) {
        res.status(500).send( { message: 'Falha ao encontrar o produto', e });
    }
}

//findByPrice
exports.findProductByPrice = async (req, res) => {
    
    try {
    await repository.findProductByPrice(req.params.price, (error, result) => {
        if (result.length === 0 ) return res.status(404).send({ message: "Nenhum Produto encontrado"});  
        if (error) return res.status(500).send({ erro: error.message });
        return res.status(200).send({ message: "Produto(s) encontrado(s)", result });
    });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao encontrar o produto', e });
    }
}