const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Database
const MONGO_LOCAL = 'mongodb://localhost/products';

mongoose.connect(MONGO_LOCAL, {
    useNewUrlParser: true
})

const db = mongoose.connection;

// Load models
const products = require('./models/products');

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;