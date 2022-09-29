const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/user/register", c.register);
router.post("/user/login", c.login);

router.post("/user/register-kelas", c.registerKelas);
router.get("/auth/getAll", c.findAllKelas);

module.exports = router;
