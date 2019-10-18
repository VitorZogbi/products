const mongoose = require ('mongoose');
const SKUProduct = mongoose.model('SKUProduct');

exports.createProduct = async data => {
    
    const product = new SKUProduct(data);
    await product.save();
}

exports.listProducts = async () => {
    
    const res = 
     await SKUProduct.aggregate([
        {
            $lookup: {
                from: "skus",
                localField: "skus",
                foreignField: "_id",
                as: "skus"
            }
        }])
    // filter = res.indexOf("5d83b37db379c61a685e");
    // console.log(filter);
    return res;
};


exports.findByProductId = async (id, callback) => {

    await SKUProduct.findById(id, '-__v',(error, docs) => {
        if(error) return callback(error, null);
        return callback(null, docs);
    });
    
}

exports.addSku = async (productId, skuId) => {

    await SKUProduct.findByIdAndUpdate(productId, { $addToSet: { skus: skuId } });
}       

exports.removeSku = async (id) => {
    await SKUProduct.updateOne({ "skus": mongoose.Types.ObjectId(id) }, { $pull: { skus: mongoose.Types.ObjectId(id) }})
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