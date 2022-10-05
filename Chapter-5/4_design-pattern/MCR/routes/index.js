const express = require('express');
const router = express.Router();
const product = require('./product');

app.use('/products', product);

module.exports = router;