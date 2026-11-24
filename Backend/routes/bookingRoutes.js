const express = require("express");
const router = express.Router();

const { getBooking, deleteBooking, approveBooking, rejectBooking } = require("../controllers/bookingController.js");

router.get("/", getBooking);
router.delete("/:booking_id", deleteBooking);
router.put("/:booking_id", approveBooking);
router.put("/:booking_id/reject", rejectBooking);

module.exports = router;