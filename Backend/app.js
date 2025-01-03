const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/booking");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
