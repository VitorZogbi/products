const { validationResult } = require ('express-validator');
const repository = require ('../repositories/sku-repository');
const skuProductRepository = require('../repositories/sku-products-repository');

exports.createSku = async (req, res) => {
    
    const errors = validationResult(req);

    if (errors.length > 0) return res.status(422).send({ message: errors });

    try {

        // await repository.createSku(req.body, (error, result ) => {
        //     if (result) {
        //         console.log(result._id);
        //         console.log(result.productId);
        //         skuProductRepository.createSku(result._id, result.productId, (err, resulte) => {
        //             if (resulte) return res.status(200).send(resulte);
        //             res.status(404).send({ erro: "sku em sku-product não cadastrado" }, err);
        //         });
                
        //     };
        //     res.status(404).send({ erro: "Produto não encontrado" }, error);
        // });

        // await repository.createSku(req.body, (error, result) => {
        //     if(result) return res.status(200).send(result);
        //     res.status(404).send({ error: "sku não cadastrada"}, error);
        // })

        await repository.createSku(req.body, (error, result) => {
            if (result) {
                console.log(result._id);
                console.log(result.productId);
                skuProductRepository.createSku(result._id, result.productId, (error, result));
                
            }
            return res.status(200).send(result);
            res.status(404).send({ error: "sku não cadastrada" }, error);
        })
        
    }catch (e) {
        return res.status(422).send({ message: "Não foi possível cadastrar o produto", error: error.message });
    }
}

// exports.findSkuById = async (req, res) => {

//     try {
//         await repository.findSkuById(req.params.id, (error, result) => {
//             if (result) return res.status(200).send({ message: "Produto encontrado", result });
//             if (error) return res.status(500).send({ message: "Produto não encontrado", erro: error.message });
//             return res.status(404).send({ message: "Produto não encontrado", error });
//         });
//     } catch (e) {
//         res.status(500).send({ message: 'Falha ao encontrar o produto', e });
//     }
// }

exports.listSku = async (req, res) => {

    try {
        const data = await repository.listSku();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as skus', e });
    }
}