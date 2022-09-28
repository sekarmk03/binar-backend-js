const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.get("/getAll", c.kelas.findAll);
router.get("/get", c.kelas.findOne);
router.post("/register", c.kelas.register);

module.exports = router;