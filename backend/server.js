const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "login",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/", function (req, res) {
  res.send("Welcome");
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO users(`name`,`dob`,`gender`,`phone`,`email`,`state`,`password`) VALUES(?)";
  const values = [
    req.body.userName,
    req.body.dob,
    req.body.gender,
    req.body.phone,
    req.body.email,
    req.body.state,
    req.body.password,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "something went wrong",
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      message: "user created successfully",
      user: data,
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `name` = ? AND `password` = ?";
  const values = [req.body.username, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "something went wrong",
        error: err,
      });
    }

    if (data.length > 0) {
      return res.status(200).json({
        success: true,
        message: "success",
      });
    } else {
      return res.json({
        success: false,
        message: "no users found",
      });
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
