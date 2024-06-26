const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Running home successfully");
  res.status(200);
  console.log("home");
});

app.get("/wishlist", (req, res) => {
  res.send("Running wishlist successfully");
  res.status(200);
  console.log("wishlist");
});

app.get("/watched", (req, res) => {
  res.send("Running watched successfully");
  res.status(200);
  console.log("watched");
});

app.get("/auth", (req, res) => {
  res.send("Running authentication successfully");
  res.status(200);
  console.log("authentication");
});

app.get("/popular", (req, res) => {
  res.send("Running popular successfully");
  res.status(200);
  console.log("popular");
});

app.get("/trending", (req, res) => {
  res.send("Running trending successfully");
  res.status(200);
  console.log("trending");
});

app.get("/search", (req, res) => {
  res.send("Running search successfully");
  res.status(200);
  console.log("search");
});

app.listen(8000, () => {
  console.log("server is running successfully");
});
