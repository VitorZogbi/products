const mongoose = require('mongoose');
const SKU = mongoose.model('SKU');

exports.createSku = async (data, callback) => {
        
    const sku = new SKU(data);
    await sku.save((error, docs) => {
        if (error) return callback(error, null);
        return callback (null, docs);
    });
}

exports.findSkuById = async (sku, callback) => {

    await SKUProduct.findOne({ 'sku._id': sku }, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}

exports.listSku = async () => {

    const res = await SKU.find({}, '-__v').sort( {_id: -1});
    return res;
}