const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { getRoom, addRoom, editRoom, deleteRoom } = require("../controllers/roomController.js");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get("/", getRoom);
router.post("/", upload.single("image"), addRoom);
router.put("/:room_id", upload.single("image"), editRoom);
router.delete("/:room_id", deleteRoom);

module.exports = router;