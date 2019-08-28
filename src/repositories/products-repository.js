const mongoose = require('mongoose');
const Products = mongoose.model('Products');

exports.listProducts = async () => {
    const res = await Products.find({},'-__v');
    return res;
};

exports.createProducts = async data => {
    const product = new Products(data);
    await product.save();
};

exports.updateProducts = async (id, data, callback) => {
    console.log(id, data);
    await Products.findByIdAndUpdate(id, {$set: data}, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    });
};

exports.deleteProducts = async (id, callback) => {
        
    await Products.findByIdAndRemove(id, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    });
   
};