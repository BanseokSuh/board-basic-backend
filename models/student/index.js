module.exports = {
  getInfo: require("./getInfo"),
};

// const mysql = require("mysql");
// const db = require("../../config/db.js");
// const TABLE = "student";

// module.exports = {
//   getInfo: () => {
//     return new Promise((resolve, reject) => {
//       const con = mysql.createConnection(db);
//       const sql = `SELECT * FROM ${TABLE}`;
//       con.query(sql, (err, result, fields) => {
//         if (err) reject(err);
//         resolve(result);
//       });
//     });
//   },
// };
