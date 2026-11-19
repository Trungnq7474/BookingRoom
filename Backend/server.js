const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");

const userRoutes = require("./routes/userRoutes.js");
const roomRoutes = require("./routes/roomRoutes.js");
const toolRoutes = require("./routes/toolRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/tools", toolRoutes);

app.get("/", (req, res) => {
    res.send("Backend Đang Hoạt Động !");
});

app.listen(5000, () => {
    console.log("Server đang chạy tại cổng 5000");
});