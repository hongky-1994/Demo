var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});
app.post("/", function(req, res) {
  res.send("Got a POST request");
});
var server = app.listen(4000, function() {
  console.log(
    "Ung dung Node.js dang hoat dong tai dia chi: http://localhost.3000"
  );
});
