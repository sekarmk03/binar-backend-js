const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.post('/auth/register', c.register);

module.exports = router;