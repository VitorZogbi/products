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

exports.findProductById = async (id, callback) => {

    await SKUProduct.findById(id, '-__v',(error, docs) => {
        if(error) return callback(error, null);
        return callback(null, docs);
    });
    
}

exports.updateProduct = async (id, data, callback) => {

    await SKUProduct.findByIdAndUpdate(id, {$set: data}, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    })
    
}

exports.deleteProduct = async (id, callback) => {

    await SKUProduct.findByIdAndDelete(id, (error, docs) => {
        if(error) return callback(error, null);
        callback(null, docs);
    })
}

exports.listPaginated = async (page, callback) => {

    const options = {

        limit: 10,
        page: page

    }

    await SKUProduct.paginate({}, options, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}