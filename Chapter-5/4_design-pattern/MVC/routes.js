const express = require('express');
const router = express.Router();
const product = require('./controllers/product');

router.get('/products/create', product.create);
router.post('/products', product.store);
router.get('/products', product.index);

module.exports = router;