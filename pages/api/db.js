import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "booking_system",
  port: "6000",
});

export default db;
