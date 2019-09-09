const mongoose = require ('mongoose');
const SKUProduct = mongoose.model('SKUProduct');

exports.createProduct = async data => {
    
    const product = new SKUProduct(data);
    await product.save();
}

exports.listProducts = async () => {
    
    const res = await SKUProduct.find({}, '-__v').sort({_id: -1});
    return res;
}

exports.createSku = async (id, data, callback) => {
    console.log(data);
    await SKUProduct.findByIdAndUpdate(id, { $addToSet: data }, (error,docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    }) 
}

exports.findProductById = async (id, callback) => {

    await SKUProduct.findById(id, '-__v',(error, docs) => {
        if(error) return callback(error, null);
        return callback(null, docs);
    })
}

exports.findSkuById = async (sku, callback) => {

    await SKUProduct.findOne( { 'sku._id':  sku }, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}