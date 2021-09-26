const createLecture = require("../../models/lecture").createLecture;

module.exports = {
  post: async (req, res) => {
    try {
      const { teacherId, name, introduce, category, price } = req.body;
      const result = await createLecture(
        teacherId,
        name,
        introduce,
        category,
        price
      );
      res.json({
        message: "강의 생성에 성공하였습니다.",
        lectureId: result.insertId,
      });
    } catch (e) {
      res.status(400).json({
        result: "강의 생성 실패",
        message: e,
      });
    }
  },
};
