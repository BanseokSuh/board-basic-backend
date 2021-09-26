const mysql = require("mysql");
const db = require("../../config/db.js");
const con = mysql.createConnection(db);

const TABLE = "teacher";

module.exports = {
  getInfo: () => {
    // return new Promise((resolve, reject) => {
    //   const sql = `SELECT * FROM ${TABLE}`;
    //   con.query(sql, (err, result, fields) => {
    //     if (err) reject(err);
    //     resolve(result);
    //   });
    // });
  },
};
