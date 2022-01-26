const express = require("express");
const app = express();
const port = 5002;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
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
      date: "Reykjavík",
    },
  ];
  res.json(journalEntry);
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
