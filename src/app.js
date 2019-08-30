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
const Products = require('./models/products');
//const Client = require('./models/client');

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

module.exports = app;