const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/find", c.findOne);
router.post("/create", c.create);
router.get("/test", (req, res) => {
  return res.status(400).json({
    status: "ok",
  });
});

router.get("/kelas-getAll", c.kelas.findAll);
router.get("/kelas-get", c.kelas.findOne);
router.post("/register-kelas", c.kelas.register);

module.exports = router;
