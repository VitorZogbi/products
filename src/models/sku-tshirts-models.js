const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')

const skuTshirts = new mongoose.Schema({

    color: {
            type: String,
            list: true,
            required: true
    },

    size: {
            type: String,
            required: true        
    },

    price: {
            type: Number,
            required: true        
    },

    stockLevel: {
                type: Number,
                required: true        
    },

    active: {
            type: Boolean,
            required: true        
    }
});

skuProduct.plugin(mongoosePaginate);

skuProduct.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('SKUTshirts', skuTshirts);