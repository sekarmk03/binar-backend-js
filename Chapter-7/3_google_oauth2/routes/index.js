const express = require('express');
const router = express.Router();
const h = require('../handlers');

router.get('/auth/login', h.auth.google);
// router.get('/users/bio/:user_id', h.auth.googleOauth2);

// /users/bio/12    -> req.params.user_id
// /users?user_id=2&status_active=true  -> req.query.user_id



module.exports = router;