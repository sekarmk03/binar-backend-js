const express = require("express");
const router = express.Router();
const auth = require('../controllers/auth');
const restrict = require('../middlewares/restrict');

router.get('/', (req, res) => {
    res.render('home');
});

// register
router.get('/auth/register', auth.registerPage);
router.post('/auth/register', auth.register);

// login
router.get('/auth/login', auth.loginPage);
router.post('/auth/login', auth.login);

// whoami
router.get('/auth/whoami', restrict, auth.whoami);

module.exports = router;
