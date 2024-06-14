const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

//@desc Register a user
//@route POST api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new error("User already register ");
  }
  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hash Password: ", hashedPassword);
  res.json({ Message: "Register the users !" });
});

//@desc Login a user
//@route POST api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ Message: "Login a users !" });
});

//@desc current user info
//@route POST api/user/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
  res.json({ Message: "Current user info !" });
});

module.exports = { registerUser, loginUser, currentUser };
