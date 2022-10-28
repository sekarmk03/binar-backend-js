var express = require('express');
var router = express.Router();
var auth = require('../controllers/authController');
var mid = require('../helpers/middleware');

router.post('/auth/register', auth.register);
router.post('/auth/login', auth.login);
router.post('/auth/whoami', mid.mustLogin, auth.whoami);

module.exports = router;
