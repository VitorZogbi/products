const express = require('express');
require('./database');

//app routes
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const productsRoutes = require('./routes/products-routes');
app.use('/products', productsRoutes);

const skuProductsRoutes = require('./routes/sku-products-routes');
app.use('/skuproducts', skuProductsRoutes);

const skuRoutes = require('./routes/sku-routes');
app.use('/sku', skuRoutes);

module.exports = app;