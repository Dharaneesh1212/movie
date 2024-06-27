import express from "express";

const userRouter = express.Router();

// signup
// signin
// forgot pswrd
// reset pswrd

userRouter.get("/auth", (req, res) => {
  res.send("Running authentication successfully");
  res.status(200);
  console.log("authentication");
});

export default userRouter;
