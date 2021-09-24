const { getInfo } = require("../../models/student/getInfo");

module.exports = {
  get: async (req, res) => {
    const result = await getInfo();
    res.json({
      message: result,
    });
  },
};
