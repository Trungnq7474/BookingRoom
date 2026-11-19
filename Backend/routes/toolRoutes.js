const express = require("express");
const router = express.Router();

const { getTool } = require("../controllers/toolController.js");

router.get("/", getTool);

module.exports = router;