const express = require('express');
const router = express.Router();
const handler = require('../handler');

router.get('/', handler.channel.getChannels);
router.get('/:channel_id', handler.channel.channelDetails);

module.exports = router;