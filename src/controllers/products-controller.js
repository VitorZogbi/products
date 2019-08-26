const mongoose = require('mongoose');
const products = mongoose.model('Products');

//list
exports.listProducts = async (req, res) => {
    try{
        const data = await products.find({});
        res.status(200).send(data);
    }catch (e) {
        res.status(500).send({message:'Falha ao carregar os produtos'});
    }
};

//create
exports.createProducts = async (req, res) => {
    try {
        const products = new Products ({
            name: req.body.name,
            desc: req.body.desc,
            amount: req.body.amount,
            price: req.body.price
        });
        
        await products.save();

        res.status(201).send({message: 'Produto cadastrado com sucesso'});
    }catch(e) {
        res.status(500).send({message: "Falha ao cadastrar o produto"});
    }; 
}