const express = require("express");
const router = express.Router();
const c = require("../controllers");
const mid = require("../helper/middleware");

router.post("/get", c.mentor.findOne);
router.post("/create", c.mentor.register);

module.exports = router;
