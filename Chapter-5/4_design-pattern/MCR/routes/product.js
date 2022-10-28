const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.post('/', product.store);         // create produk ke db
router.get('/', product.index);          // tampilkan semua data
router.get('/:id', product.show);        // tampilkan detail
router.put('/:id', product.update);      // update product db
router.delete('/:id', product.destroy);  // hapus produk

module.exports = router;