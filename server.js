require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');

// import routes
const authRoute = require("./routes/auth");
const entryRoute = require("./routes/entry");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(cors());


app.get("/api", (req, res) => {
  res.send("Mern stack daily journal express server");
});

app.post("/name", (req, res) => {
  if(req.body.name) {
    return res.json({name: req.body.name})
  } else {
    return res.status(400).json({error: "No name provided"});
  }
});

app.use('/api/auth', authRoute);
app.use("/api/entry", entryRoute);

app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });