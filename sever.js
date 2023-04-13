const express = require("express");
let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");
server.get("/login.html", (req, res) => {
  res.render("login");
});
server.get("/", (req, res) => {
  res.render("layout");
});
server.listen(4000);