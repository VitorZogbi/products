const mongoose = require('mongoose');
const Products = mongoose.model('Products');

//list
exports.listProducts = async (req, res) => {
    try{
        const data = await products.find({}, '-__v');
        res.status(200).send(data);
    }catch (e) {
        res.status(500).send({message:'Falha ao carregar os produtos'});
    }
};

//create
exports.createProducts = async (req, res) => {
    try {
        console.log('Produto: ', req.body)
        const product = new Products ({
            name: req.body.name,
            desc: req.body.desc,
            amount: req.body.amount,
            price: req.body.price
        });
            
        await product.save();

        res.status(201).send({message: 'Produto cadastrado com sucesso'});

    }catch(e) {
        res.status(500).send({message: "Falha ao cadastrar o produto", e});
    }; 
}