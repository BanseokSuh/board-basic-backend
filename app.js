const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

require("dotenv").config();
morgan("tiny");

const studentRouter = require("./routes/student");

app.use("/api/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
