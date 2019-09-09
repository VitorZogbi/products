const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')

const product = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stockLevel: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

product.plugin(mongoosePaginate);
product.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('Product',product);