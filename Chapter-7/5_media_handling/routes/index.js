const express = require('express');
const router = express.Router();
const storage = require('../utils/storage');

router.post('/upload/single', storage.single('media'), (req, res) => {
    const imageUrl = req.protocol + '://' + req.get('host') + '/images/' + req.file.filename;
    
    return res.json({
        imageUrl
    });
});

router.post('/upload/multiple', storage.array('media'), (req, res) => {
    return res.json(req.files);
});


module.exports = router;