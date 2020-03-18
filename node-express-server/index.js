const express = require("express");

const app = express();

var fs = require("fs");

app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    res.send(data);
  });
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
