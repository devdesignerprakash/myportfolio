const bcrypt = require("bcrypt");
const dotenv= require('dotenv')
dotenv.config()
const jwt = require("jsonwebtoken");
const Profile = require("../schemas/profileSchema");
const authenticateUser = async (email, password) => {
  const user = await Profile.findOne({ email });
  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET,{
    expiresIn: "1d",
  });

  return { token, user };
};

module.exports = { authenticateUser };
