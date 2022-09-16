const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.user.index);
router.get('/:userId', controller.user.show);
router.post('/', controller.user.create);

module.exports = router;