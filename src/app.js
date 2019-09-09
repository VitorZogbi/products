const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const MONGO_LOCAL = 'mongodb://localhost/products';

mongoose.connect(MONGO_LOCAL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection;

// Load models
require('./models/products-models');
require('./models/sku-products-models');

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

const indexRoutes = require('./routes/index-routes');

app.use('/', indexRoutes);

const productsRoutes = require('./routes/products-routes');
app.use('/products', productsRoutes);

const skuProductsRoutes = require('./routes/sku-products-routes');
app.use('/skuproducts', skuProductsRoutes);

module.exports = app;