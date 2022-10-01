const mysql = require("mysql");

const db = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net", // "localhost" by default
  user: "b584594a62040a", // "root" by default
  password: "9bfd847c",
  database: "heroku_a71458f9e4fdc29",
});

module.exports = db;
