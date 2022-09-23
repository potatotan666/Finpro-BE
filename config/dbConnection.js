const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost", // "localhost" by default
  user: "root", // "root" by default
  password: "password",
  database: "cookpedia",
});

module.exports = db;
