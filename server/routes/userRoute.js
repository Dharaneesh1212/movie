import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import USER from "../models/userModel.js";

const userRouter = express.Router();

// signup
userRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await USER.findOne({ email });
  if (user) {
    return res.json({ message: "user already exist" });
  }

  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = new USER({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({ status: true, message: "user already exist" });
});

// signin


export default userRouter;
