const express = require('express');
require('./database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json')

//app routes
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const skuProductsRoutes = require('./routes/sku-products-routes');
app.use('/skuproducts', skuProductsRoutes);

const skuRoutes = require('./routes/sku-routes');
app.use('/skus', skuRoutes);

module.exports = app;