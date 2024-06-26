import express from "express";

const userRouter = express.Router();

userRouter.get("/auth", (req, res) => {
  res.send("Running authentication successfully");
  res.status(200);
  console.log("authentication");
});

export default userRouter;
