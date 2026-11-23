const express = require("express");
const router = express.Router();

const { getBooking, deleteBooking } = require("../controllers/bookingController.js");

router.get("/", getBooking);
router.delete("/:booking_id", deleteBooking);

module.exports = router;