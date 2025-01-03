import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import AvailabilityDisplay from "./components/AvailabilityDisplay";
import BookingSummary from "./components/BookingSummary";
import "./styles.css";

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmit = (formData) => {
    fetch("http://localhost:3001/api/bookings/create-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setBookingDetails(data));
  };

  return (
    <div>
      {!bookingDetails ? (
        <>
          <BookingForm onBookingSubmit={handleBookingSubmit} />
          <AvailabilityDisplay />
        </>
      ) : (
        <BookingSummary details={bookingDetails} />
      )}
    </div>
  );
}

export default App;
