const mongoose= require('mongoose')
const { v4: uuidv4 } = require('uuid');
const profileSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ["user", "admin"], default: "user" },
    role:[String],
    profilePicture: { type: String, default: "default-profile.png" }, 
    bio: { type: String, default: "" }, 
    socialLinks: {
      twitter: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
      facebook:{type:String, default:""},
      insta:{type:String, default:""}
    },
  }, );
  
  const Profile = mongoose.model("Profile", profileSchema);
  module.exports = Profile;