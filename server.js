const express = require("express");
const app = express();

app.get("/", function (req, res) {
    // console.log(req);
   res.send("Yay Node!");
});

app.get("/chocolate", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Mm chocolate : O" + " " + searchQuery);
});

app.get("/node", function (req, res) {
  res.send("Node.js is awesome");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("CYF is a family of genious.");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});