// import mysql from "mysql2/promise";

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "manager",
//   database: "booking_system",
//   port: "6000",
// });

// export default db;


import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "sql11.freemysqlhosting.net",
  user: "sql11645672",
  password: "ihquMCzLYl",
  database: "sql11645672",
  port: "3306",
});

export default db;
