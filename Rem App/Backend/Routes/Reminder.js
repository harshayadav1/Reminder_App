const express = require("express");
const router = express.Router();
const Reminder = require("../Models/Reminder.js");

router.post("/create", async (req, res) => {
  try {
    const { message, date, time, type } = req.body;

    if (!message || !date || !time || !type) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const reminder = new Reminder({ message, date, time, type });
    await reminder.save();
    res.status(201).json({ message: "Reminder created successfully", reminder });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



// GET all reminders
router.get("/", async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ createdAt: -1 });
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reminders" });
  }
});




module.exports = router;
