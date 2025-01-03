import React from "react";

function BookingSummary({ details }) {
  return (
    <div className="summary-container">
      <h2>Booking Confirmed</h2>
      <p>Date: {details.date}</p>
      <p>Time: {details.time}</p>
      <p>Guests: {details.guests}</p>
      <p>Name: {details.name}</p>
      <p>Contact: {details.contact}</p>
    </div>
  );
}

export default BookingSummary;
