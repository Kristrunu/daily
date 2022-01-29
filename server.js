require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser"); 

// import Routes 
const authRoute = require("./routes/auth");
const EntryRoute = require("./routes/entry");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.send("Hello world");
});



app.post("/name", (req, res) => {
  if(req.body.name) {
    return res.json({name: req.body.name})
  } else {
    return res.status(400).json({error: "No name provided"});
  }
});

app.use('/api/auth', authRoute);
app.use("/api/entry", EntryRoute);


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


