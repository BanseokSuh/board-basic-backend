const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("dotenv").config();
morgan("tiny");

const studentRouter = require("./routes/student");
const teacherRouter = require("./routes/teacher");
const lectureRouter = require("./routes/lecture");

app.use(bodyParser.json());
app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/lecture", lectureRouter);

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
