const express = require("express");
const router = express.Router();
const c = require('../controllers');
const kelas_user = require('./kelas_user');

router.use('/kelas_user', kelas_user);

// router.post('/find', c.);
// router.post('/create', c.create);
// router.get('/test', (req, res) => {
//     return res.status(400).json({
//         status: 'ok'
//     });
// });

router.get("/kelas-getAll", c.kelas.findAll);
router.get("/kelas-get", c.kelas.findOne);
router.post("/register-kelas", c.kelas.register);

module.exports = router;
