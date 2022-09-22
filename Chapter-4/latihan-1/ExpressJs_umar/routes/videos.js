const express = require("express");
const router = express.Router();
const handler = require('../handler');

router.get('/', handler.video.getVideo);
router.get('/like', handler.video.getLikeVideo);
module.exports = router;