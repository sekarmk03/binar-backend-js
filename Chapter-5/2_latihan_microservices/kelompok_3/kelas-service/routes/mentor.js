const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/get", c.mentor.findOne);
router.post("/create", c.mentor.create);

module.exports = router;
