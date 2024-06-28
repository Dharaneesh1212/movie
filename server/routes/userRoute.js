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
userRouter.post("signin", async (req, res)=>{
  const {email, password} = req.body;
  const user = await USER.findOne({email});
  if(!user){
    return res.json({message : "user does not registered"});
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if(!validPassword){
    return res.json({message : "password does not match"});
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // Requires HTTPS
    sameSite: "none",
    maxAge: 360000, // Adjust based on your session timeout
  });

  return res.json({ status: true, message: "Login successful" });
})

export default userRouter;
