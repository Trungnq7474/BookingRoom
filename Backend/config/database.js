const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if(err) {
        console.log("Kết Nối Thất Bại !");
    }

    else {
        console.log("Kết Nối Thành Công !");
    }
});

module.exports = db;