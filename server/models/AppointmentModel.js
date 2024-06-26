const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  selectedDate: String,
  selectedDay: String,
  slotStartTime: String,
  slotEndTime: String,
  doctorName: String,
  userName: String,
  userId: String,
  exists: { type: Boolean, default: false },
});

const AppointmentModel = mongoose.model("appointments", AppointmentSchema);

module.exports = AppointmentModel;
