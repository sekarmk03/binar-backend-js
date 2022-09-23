const express = require('express');
const router = express.Router();
const c = require('../controllers');
const mid = require('../helpers/middleware');

router.post('/auth/register', c.auth.register);
router.post('/auth/login', c.auth.login);
router.get('/auth/whoami', mid.mustLogin, c.auth.whoami);
router.post('/auth/changepassword', mid.mustLogin, c.auth.changePassword);

router.post('/channels', mid.mustLogin, c.channel.create);
router.get('/channels', mid.mustLogin, c.channel.index);
router.get('/channels/:channel_id', mid.mustLogin, c.channel.show);

router.post('/videos', mid.mustLogin, c.video.create);
router.get('/videos', mid.mustLogin, c.video.index);
router.get('/videos/:video_id', mid.mustLogin, c.video.show);

module.exports = router;