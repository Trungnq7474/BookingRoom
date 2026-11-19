const express = require("express");
const router = express.Router();

const { getRoom } = require("../controllers/roomController.js");

router.get("/", getRoom);

module.exports = router;