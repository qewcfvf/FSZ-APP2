const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server läuft");
});

app.listen(3001, () => {
  console.log("Server läuft auf Port 3001");
});