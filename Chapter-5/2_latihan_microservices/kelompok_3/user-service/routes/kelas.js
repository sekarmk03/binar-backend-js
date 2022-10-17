const express = require("express");
const router = express.Router();
const c = require("../controllers");

// router.post("/create", c.kel);
router.post("/create", c.kelas.register);
router.get("/:id", c.kelas.findOne);

module.exports = router;
