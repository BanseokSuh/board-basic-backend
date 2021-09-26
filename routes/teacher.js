const express = require("express");
const router = express.Router();

const { teacherController } = require("../controllers");

router.get("/getInfo", teacherController.getInfo.get);

module.exports = router;
