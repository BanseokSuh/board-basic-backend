const { getInfo } = require("../../models/teacher/getInfo");

module.exports = {
  get: async (req, res) => {
    const result = await getInfo();
    res.json({
      message: result,
    });
  },
};
