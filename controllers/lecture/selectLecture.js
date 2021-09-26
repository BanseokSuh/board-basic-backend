const selectLecture = require("../../models/lecture").selectLecture;
module.exports = {
  get: async (req, res) => {
    const { id } = req.params;
    try {
      const lecture = await selectLecture(id);
      res.json({
        lecture,
      });
    } catch (e) {
      res.status(400).json({
        result: "강의 조회 실패",
        message: e.sqlMessage,
      });
    }
  },
};
