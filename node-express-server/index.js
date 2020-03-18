const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    res.send(data);
  });
});

app.post("/post", (req, res) => {
  console.log("Data:", req.body);
  fs.writeFile("data.json", `${JSON.stringify(req.body)}`, err => {
    console.log("--------------------------------------");
    console.log("req.body", req.body);
    console.log("--------------------------------------");
    res.send("Finish update file");
  });
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
