const express = require("express");
const router = express.Router();

const { getIncident, deleteIncident } = require("../controllers/incidentController.js");

router.get("/", getIncident);
router.delete("/:incident_id", deleteIncident);

module.exports = router;