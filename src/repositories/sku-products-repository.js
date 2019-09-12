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
    //erro aqui
    console.log('oioioi');
    console.log(id);
    console.log(data);
    await SKUProduct.findByIdAndUpdate({ _id: id }, { $addToSet: { sku: data}}, (error, docs) => {

        if (error) return callback(error, null);
        callback(null, docs);
    })
}

// exports.createSku = async (id, data, callback) => {
    
//     await SKUProduct.findByIdAndUpdate( id, {$addToSet: data} , (error, docs) => {
//         if (error) return callback(error, null);
//         callback(null, docs);
//     })
// }

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

exports.updateProduct = async (id, data, callback) => {

    await SKUProduct.findByIdAndUpdate(id, {$set: data}, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    })
    
}