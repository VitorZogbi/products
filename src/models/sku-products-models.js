const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')
// require('mongoose-money');
// var Money = require ('moneyjs');


const skuProduct = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        required: true
    },

    sku: [{
        
        id: {
            type: mongoose.Schema.Types.ObjectId
        }
        
    }]
});

skuProduct.plugin(mongoosePaginate);

skuProduct.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('SKUProduct', skuProduct);