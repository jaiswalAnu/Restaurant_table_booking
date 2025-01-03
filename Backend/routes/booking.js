const express = require("express");
const router = express.Router();

let bookings = [];

router.post("/create-booking", (req, res) => {
  const newBooking = { id: Date.now(), ...req.body };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

router.get("/get-bookings", (req, res) => {
  res.json(bookings);
});

router.delete("/delete-booking/:id", (req, res) => {
  bookings = bookings.filter((b) => b.id !== parseInt(req.params.id));
  res.json({ message: "Booking deleted" });
});

module.exports = router;
