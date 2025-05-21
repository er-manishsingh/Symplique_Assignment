const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());

// routes
const reminderRoutes = require("./src/reminder/reminder.route");
app.use("/api/reminders", reminderRoutes);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  app.use("/", (req, res) => {
    res.send("Book Server is running..");
  });
}

main()
  .then(() => console.log("Connected to MongoDB ✅"))

  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
