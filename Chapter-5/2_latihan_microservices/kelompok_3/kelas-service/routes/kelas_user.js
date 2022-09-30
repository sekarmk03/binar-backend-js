const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.get("/", c.kelas_user.index);
router.post("/create", c.kelas_user.create);

module.exports = router;
