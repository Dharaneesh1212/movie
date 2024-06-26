import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.listen(PORT, () => {
  console.log(`server is running successfully http://localhost:${PORT}`);
});

app.use("/api/movie", movieRoute);
