const express = require("express");
const router = express.Router();

const { studentController } = require("../controllers");

router.get("/getInfo", studentController.getInfo.get);

module.exports = router;
