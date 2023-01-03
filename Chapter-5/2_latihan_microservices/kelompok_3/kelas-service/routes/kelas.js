const express = require("express");
const router = express.Router();
const c = require("../controllers");

// router.get("/", c.kelas.findAll);
router.get("/:id", c.kelas.findOne);
router.post("/register", c.kelas.register);

module.exports = router;
