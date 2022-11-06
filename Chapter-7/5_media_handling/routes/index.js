const express = require('express');
const router = express.Router();
const storage = require('../utils/storage');
const h = require('../handlers');
const restrict = require('../middlewares/restrict');
const { User } = require('../models');

const multer = require('multer');
const upload = multer();

router.post('/auth/register', h.auth.register);
router.post('/auth/login', h.auth.login);

router.post('/upload/imagekit', restrict, upload.single('image'), h.media.upload);
router.put('/users/update-avatar', restrict, h.user.updateAvatar);
router.get('/users', restrict, async (req, res) => {
    const user = req.user;
    const userData = await User.findOne({ where: { id: user.id } });

    return res.send(userData);
});

router.post('/upload/single', storage.image.single('media'), (req, res) => {
    const imageUrl = req.protocol + '://' + req.get('host') + '/images/' + req.file.filename;

    return res.json({
        imageUrl
    });
});

router.post('/upload/multiple', storage.image.array('media'), (req, res) => {

    const files = [];
    req.files.forEach(file => {
        const imageUrl = req.protocol + '://' + req.get('host') + '/images/' + file.filename;

        files.push(imageUrl);
    });

    return res.json(files);
});


module.exports = router;