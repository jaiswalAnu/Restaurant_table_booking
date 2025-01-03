import React, { useEffect, useState } from "react";

function AvailabilityDisplay() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/bookings/get-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="availability-container">
      <h2>Available Slots</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.date} at {booking.time} — {booking.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailabilityDisplay;
