const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, enum: ["email", "sms"], required: true },
}, { timestamps: true });

module.exports = mongoose.model("Reminder", ReminderSchema);
