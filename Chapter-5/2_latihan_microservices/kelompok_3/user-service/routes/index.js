const express = require("express");
const router = express.Router();
const c = require("../controllers");
const kelas_user = require("./kelas_user");
const kelas = require("./kelas");
const mid = require("../helper/middleware");
const mentor = require("./mentor");

router.post("/user/create", c.user.create);
router.post("/user/login", c.user.login);
router.get("/user/get", c.user.index);

router.use("/kelas_user", kelas_user);
router.use("/kelas", mid.mustLogin, kelas);
router.use("/mentor", mentor);

module.exports = router;
