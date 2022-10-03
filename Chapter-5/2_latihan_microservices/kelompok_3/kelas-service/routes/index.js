const express = require("express");
const router = express.Router();
const kelas_user = require("./kelas_user");
const kelas = require("./kelas");
const mentor = require("./mentor");

router.use("/kelas_user", kelas_user);
router.use("/kelas", kelas);
router.use("/mentor", mentor);

module.exports = router;
