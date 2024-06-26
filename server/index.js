import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import userRouter from "./routes/userRoute.js";
import mongoose from "mongoose";

// configs
dotenv.config();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;
const app = express();

app.use("/api/movie", movieRoute);
app.use("/api/user", userRouter);

// connections
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running successfully http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error on connect to mongoDb", err);
  });
