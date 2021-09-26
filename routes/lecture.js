const express = require("express");
const router = express.Router();

const { lectureController } = require("../controllers");

router.post("/", lectureController.createLecture.post);
router.get("/", lectureController.selectLectureList.get);
router.get("/:id", lectureController.selectLecture.get);

module.exports = router;
