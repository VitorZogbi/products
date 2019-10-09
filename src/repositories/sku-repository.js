const mongoose = require('mongoose');
const SKU = mongoose.model('SKU');

exports.createSku = async (data, callback) => {
        
    const sku = new SKU(data);
    await sku.save((error, docs) => {
        if (error) return callback(error, null);
        return callback (null, docs);
    });
};

exports.listSku = async () => {

    const res = await SKU.find({}, '-__v').sort( {_id: -1});
    return res;
};
//returns product information also instead product id
exports.findSkuById = async (id, callback) => {

    
    await SKU.findById( id ,'-__v', (error, docs) => {
        
        if (error) return callback(error, null);
        return callback(null, docs);
    }).populate('productId');
   
};

exports.updateSku = async (id, data, callback) => {

    await SKU.findByIdAndUpdate(id, { $set: data }, (error, docs) => {

        if (error) return callback (error, null);
        callback(null, docs);
    })
}

exports.deleteSku = async (id, callback) => {

    await SKU.findByIdAndDelete( id, (error, docs) => {
        
        if (error) return callback(error, null);
        return callback(null, docs);
    })
};

exports.listPaginated = async (page, callback) => {

    const options = {

        limit: 10,
        page: page

    }

    await SKU.paginate({}, options, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}