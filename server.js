require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');

// Import routes
const authRoute = require("./routes/auth"); // User authentication route
const entryRoute = require("./routes/entry"); // Entry route

const app = express(); // Initializing the server

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(cors());

// Test GET api request
app.get("/api", (req, res) => {
  res.send("Mern stack daily journal express server");
});

// Test POST for name
app.post("/name", (req, res) => {
  if(req.body.name) {
    return res.json({ name: req.body.name })
  } else {
    return res.status(400).json({error: "No name provided"});
  }
});

// Make the app use the routes
app.use('/api/auth', authRoute);
app.use("/api/entry", entryRoute);

// For Heroku build
app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});

// Connecting to our MongoDB database using mongoose
mongoose
  .connect(process.env.MONGO_URI) // Connect using our MONGU_URI environmental variable from .env
  .then(() => {
    console.log("Connected to database");

    // Listen and start the express server
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => { // If there is an issue connecting to the database we catch the error and log it in console
    console.log(error);
  });