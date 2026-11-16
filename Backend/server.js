const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Đang Hoạt Động !");
});

app.listen(5000, () => {
    console.log("Server đang chạy tại cổng 5000");
});