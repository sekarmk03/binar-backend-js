const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', controllers.products.getProducts)
router.get('/:productId', controllers.products.getDetail)
router.post('/', controllers.products.addProduct)
router.put('/:productId', controllers.products.updateProduct)
router.delete('/:productId', controllers.products.deleteProduct)

module.exports = router
