const express = require("express");
const router = express.Router();

const channel = require('./channel');
const video = require('./videos');
const users = require('./users');

router.use('/channels', channel);
router.use('/videos', video);
router.use('/users', users);

module.exports = router;
