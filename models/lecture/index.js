const mysql = require("mysql");
const db = require("../../config/db.js");
const con = mysql.createConnection(db);
const TABLE = "lecture";

module.exports = {
  createLecture: (teacherId, name, introduce, category, price) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO 
                    ${TABLE}(
                      teacherId,
                      name,
                      introduce,
                      category, 
                      price)
                    VALUES (
                      ${teacherId}, 
                      "${name}", 
                      "${introduce}", 
                      "${category}", 
                      ${price})`;
      con.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  selectLectureList: () => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT
                    L.id,
                    L.name AS lectureName,
                    L.introduce,
                    L.category,
                    L.price,
                    L.studentCount,
                    L.createdAt,
                    T.name AS teacherName
                  FROM lecture AS L, teacher AS T
                  WHERE L.teacherId = T.id`;
      con.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  selectLecture: (id) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT
                    L.id,
                    L.name AS lectureName,
                    L.introduce,
                    L.category,
                    L.price,
                    L.studentCount,
                    L.createdAt,
                    L.updatedAt,
                    SL.studentId,
                    S.name
                  FROM
                    lecture as L,
                    studentLecture as SL,
                    student as S
                  WHERE L.id = ${id} 
                  AND SL.lectureId = L.id
                  AND SL.studentId = S.id`;

      con.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};
