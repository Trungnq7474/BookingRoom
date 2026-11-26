const express = require("express");
const router = express.Router();

const { getMaintenance, approveMaintenance, deleteMaintenance, rejectMaintenance } = require("../controllers/maintenanceController.js");

router.get("/", getMaintenance);
router.put("/:maintenance_id", approveMaintenance);
router.delete("/:maintenance_id", deleteMaintenance);
router.put("/:maintenance_id/reject", rejectMaintenance);

module.exports = router;