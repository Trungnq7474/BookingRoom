const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { getTool, addTool, editTool, deleteTools } = require("../controllers/toolController.js");
const { route } = require("./userRoutes.js");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get("/", getTool);
router.post("/", upload.single("image"), addTool);
router.put("/:tool_id", upload.single("image"), editTool);
router.delete("/:tool_id", deleteTools);

module.exports = router;