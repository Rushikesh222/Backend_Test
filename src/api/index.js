require("dotenv").config();
const app = require("../server"); // Your Express app
const mongoose = require("mongoose");
const connectDB = require("../src/config/db");


module.exports = async (req, res) => {
  try {
    await connectDB(); // Ensure DB is connected
    app(req, res);     // Pass request to Express app
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
