import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Running home successfully");
  res.status(200);
  console.log("home");
});

router.get("/wishlist", (req, res) => {
  res.send("Running wishlist successfully");
  res.status(200);
  console.log("wishlist");
});

router.get("/watched", (req, res) => {
  res.send("Running watched successfully");
  res.status(200);
  console.log("watched");
});

router.get("/popular", (req, res) => {
  res.send("Running popular successfully");
  res.status(200);
  console.log("popular");
});

router.get("/trending", (req, res) => {
  res.send("Running trending successfully");
  res.status(200);
  console.log("trending");
});

router.get("/search", (req, res) => {
  res.send("Running search successfully");
  res.status(200);
  console.log("search");
});

export default router