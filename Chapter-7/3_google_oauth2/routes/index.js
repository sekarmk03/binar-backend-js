const express = require('express');
const router = express.Router();
const h = require('../handlers');

router.get('/auth/login', h.auth.googleOauth2);

module.exports = router;