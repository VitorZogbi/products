const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.listProducts = async () => {

    const res = await Product.find({},'-__v');
    return res;
};

exports.createProducts = async data => {

    const product = new Product(data);
    await product.save();
};

exports.updateProducts = async (id, data, callback) => {
    
    await Product.findByIdAndUpdate(id, {$set: data}, (error, docs) => {
        if (error) return callback(error, null);
        callback(null, docs);
    });
};

exports.deleteProducts = async (id, callback) => {
        
    await Product.findByIdAndRemove(id, (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
        
    }); 
};

exports.findProductById = async (id, callback) => {

    await Product.findById(id, '-__v', (error, docs) => {
        if (error) return callback (error, null);
        return callback(null, docs);
    })
}

exports.findProductByName = async (name, callback) => {

    await Product.find({name}, '-__v', (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}

exports.findProductByPrice = async (price, callback) => {
    
    await Product.find({price: {$lte: price}}, '-__v', (error, docs) => {
        if (error) return callback(error, null);
        return callback(null, docs);
    })
}