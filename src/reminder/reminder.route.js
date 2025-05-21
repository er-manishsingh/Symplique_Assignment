const express = require("express");
const router = express.Router();
const Reminder = require("../reminder/reminder.model");

// set reminders
router.post("/", async (req, res) => {
  const { date, time, message, method } = req.body;

  try {
    const newreminder = new Reminder({ date, time, message, method });
    await newreminder.save();
    res
      .status(200)
      .send({ message: "Reminder saved successfully", reminder: newreminder });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to save reminder", details: error.message });
  }
});

module.exports = router;
