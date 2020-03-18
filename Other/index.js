const express = require("express");
const app = express();
const port = 8000;
var fs = require("fs");

app.get("/data", (req, res) => {
  let json = "";
  fs.readFile("data/data.json", "utf8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
