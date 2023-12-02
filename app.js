const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

app.listen(port, () => console.log(`server up and running on port ${port}`));
