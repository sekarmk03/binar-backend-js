const express = require('express');
const router = express.Router();
const product = require('./controllers/product');

router.get('/', (req, res) => res.redirect('/products')); // handle home /

router.get('/products/create', product.create);  // tampilkan halaman create
router.post('/products', product.store);         // create produk ke db
router.get('/products', product.index);          // tampilkan semua data
router.get('/products/:id', product.show);       // tampilkan detail
router.get('/products/:id/edit', product.edit);  // tampilkan page edit
router.put('/products/:id', product.update);     // update product db
router.delete('/products/:id', product.destroy); // hapus produk

module.exports = router;