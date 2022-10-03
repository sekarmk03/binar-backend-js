const express = require("express");
const router = express.Router();
const c = require("../controllers");
const mid = require("../helper/middleware");

// router.post("/create", c.kel);
router.post("/create", c.kelas_user.register);

module.exports = router;
