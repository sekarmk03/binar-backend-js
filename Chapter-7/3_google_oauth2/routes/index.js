const express = require('express');
const router = express.Router();
const h = require('../handlers');

router.get('/auth/login', h.auth.google);
router.get('/auth/login/facebook', h.auth.facebook);

module.exports = router;