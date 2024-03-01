const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3001; // Choose the port you want your server to run on

app.use(cors());
app.use(express.json()); // Enable JSON body parsing

// MySQL database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "rajat",
  password: "rajat",
  database: "login",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

// Define your registration route
app.post("/register", (req, res) => {
  const formData = req.body; // Assuming your frontend sends data as JSON

  // TODO: Add your registration logic here, e.g., insert data into the database
  // Example query:
  // connection.query('INSERT INTO users SET ?', formData, (error, results) => {
  //   if (error) {
  //     console.error('Error during registration:', error);
  //     return res.status(500).json({ error: 'Internal Server Error' });
  //   }
  //   console.log('User registered successfully:', results);
  //   res.status(200).json({ message: 'Registration successful' });
  // });

  // Placeholder response for now
  res.status(200).json({ message: "Registration successful" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
