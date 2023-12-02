const express = require("express");
const app = express();
const mysql = require("mysql");

// connecting to a mysql database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "michael",
  password: "peakyblinders",
});
// connecting the database//
db.connect((err) => {
  if (err) throw err;
  console.log("database connected....");
});
//creating database

app.get("/create-db", (req, res) => {
  const sql = "CREATE DATABASE expressMYSQL";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result).res.send("Database created successfully");
  });
});
const port = 5000;

app.listen(port, () => console.log(`server up and running on port ${port}`));
