class ProductValidation {

    static productValidation(product) {

        if (req.body.name.length < 3) return res.status(400).send({ message: "Nome não pode ter menos que 3 caracteres" });

        if (req.body.description.length < 7) return res.status(400).send({ message: "Descrição não pode ter menos que 10 caracteres" })

        if (req.body.price <= 0) return res.status(400).send({ message: 'Preço não pode ser 0 ou negativo' });

        if (req.body.stockLevel < 0) return res.status(400).send({ message: 'Quantidade não pode ser menor que 0' });

        return product;
    }
}

module.exports = ProductValidation;