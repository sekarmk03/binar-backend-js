const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/', controller.users.getData)
router.get('/:userId', controller.users.getDetail)
router.post('/', controller.users.addUser)
router.put('/:userId', controller.users.updateUser)
router.delete('/:userId', controller.users.deleteUser)

module.exports = router
