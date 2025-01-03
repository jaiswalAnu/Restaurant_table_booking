import React, { useState } from "react";
import "../styles.css";

function BookingForm({ onBookingSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(formData);
  };

  return (
    <div className="booking-container">
      <h1>Restaurant Table Booking</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <input
          name="guests"
          type="number"
          min="1"
          onChange={handleChange}
          required
        />
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          name="contact"
          placeholder="Contact Info"
          onChange={handleChange}
          required
        />
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default BookingForm;
