require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/name", (req, res) => {
  if(req.body.name) {
    return res.json({name: req.body.name})
  } else {
    return res.status(400).json({error: "No name provided"});
  }
});


app.get("/journal", (req, res) => {
  const journalEntry = [
    {
      title: "Yes",
      text: "Iceland",
      date: "Iceland",
    },
    {
      title: "No",
      text: "Iceland",
      date: "Reykjavík"
    },
  ];
  res.json(journalEntry);
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


