const mysql = require("mysql2");
const { DB_HOST, DB_DATABASE,DB_PASSWORD,DB_USER } = require("../constants");

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = pool.promise();

module.exports = db;
