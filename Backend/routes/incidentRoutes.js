const express = require("express");
const router = express.Router();

const { getIncident, deleteIncident, assignIncident } = require("../controllers/incidentController.js");

router.get("/", getIncident);
router.delete("/:incident_id", deleteIncident);
router.put("/:incident_id", assignIncident);

module.exports = router;