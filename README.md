# Remind-me-later 🕒

A simple Node.js + Express.js web API that allows users to set reminders with a message, date, time, and preferred reminder method (SMS or Email).

---

## 🚀 Features

- Create and store reminders
- Supports:
  - 📧 Email
  - 📱 SMS
- MongoDB used for data persistence
- Scalable structure for adding new reminder types in future

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Tools**: Postman for API testing

---

## 📦 API Endpoint

### ➕ Create Reminder

**POST** `/api/reminders`

#### 📥 Request Body

```json
{
  "date": "2025-05-22",
  "time": "10:30",
  "message": "Meeting with team",
  "method": "Email"  // or "SMS"
}


---------------------------------------
Run the Project Locally

# Install dependencies
npm install

# Start the server
nodemon index.js

Ensure MongoDB is running locally or update the URI in index.js if using MongoDB Atlas.
