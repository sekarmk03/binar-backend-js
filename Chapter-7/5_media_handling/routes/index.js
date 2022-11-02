const express = require('express');
const router = express.Router();
const storage = require('../utils/storage');

const multer = require('multer');
const upload = multer();
const imagekit = require('../utils/imagekit');

router.post('/upload/imagekit', upload.single('image'), async (req, res) => {
    const file = req.file.buffer.toString("base64");

    const uploadedFile = await imagekit.upload({
        file,
        fileName: req.file.originalname
    });

    return res.send(uploadedFile);
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