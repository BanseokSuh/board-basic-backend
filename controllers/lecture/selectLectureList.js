const selectLectureList = require("../../models/lecture").selectLectureList;
module.exports = {
  get: async (req, res) => {
    try {
      const lectureList = await selectLectureList();
      res.json({
        lectureList,
      });
    } catch (e) {
      res.status(400).json({
        result: "강의목록 조회 실패",
        message: e.sqlMessage,
      });
    }
  },
};
