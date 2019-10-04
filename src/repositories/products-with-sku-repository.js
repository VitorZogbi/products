const mongoose = require('mongoose');
const ProductsWithSku = mongoose.model('ProductWithSku');

exports.createProductwithSku = async (data, callback) => {

    const productsWithSku = new ProductsWithSku(data);
    await productsWithSku.save((error, docs) => {
        if (error) return callback (error, null);
        return callback (null, docs);
    })
}

exports.createSku = async (id, data, callback) => {
    
    await ProductsWithSku.findByIdAndUpdate( id, { $addToSet: { sku: data } }, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}

exports.listProductWithSku = async () => {

    const res = await ProductsWithSku.find({}).sort({ _id: -1 });
    return res;

}

exports.findbyId = async (id, callback) => {

    await ProductsWithSku.findById(id, '-__v', (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}

exports.updateProduct = async (id, data, callback) => {

    await ProductsWithSku.findByIdAndUpdate(id, { $set: data }, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    })
}

exports.updateSku = async (id, data, callback) => {
//não ta ok
    await ProductsWithSku.update( { 'sku._id': mongoose.Types.ObjectId(id) }, { "$set": {sku: data  }}, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    })
}

exports.delete = async (id, callback) => {

    await ProductsWithSku.findByIdAndDelete(id, (error, docs) => {
        if(error) return callback(error, null);
        return callback(null, docs);
    })
}

exports.deleteSku = async (id, callback) => {

    await ProductsWithSku.update({ "sku._id": mongoose.Types.ObjectId(id) }, { "$pull": { "sku": { "_id": mongoose.Types.ObjectId(id)}}}, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}