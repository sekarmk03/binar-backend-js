const express = require("express");
const router = express.Router();
const c = require('../controllers');
const kelas_user = require('./kelas_user');
const kelas = require('./kelas');

router.use('/kelas_user', kelas_user);
router.use('/kelas', kelas);

// router.post('/find', c.);
// router.post('/create', c.create);
// router.get('/test', (req, res) => {
//     return res.status(400).json({
//         status: 'ok'
//     });
// });

module.exports = router;
