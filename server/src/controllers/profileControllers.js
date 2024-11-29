const Profile = require("../schemas/profileSchema");
const profileServices = require("../services/profileServices");
const ProfileServices = require("../services/profileServices");
const bcrypt = require("bcrypt");

class ProfileControllers {
  async createAdmin(req, res) {
    try {
      const existAdmin = await Profile.findOne({ email: req.body.email });

      if (!existAdmin) {
        const { password, skills, ...otherData } = req.body;
        const hashedPassword = await bcrypt.hashSync(password, 10);

        const profilePicture =
          req.files && req.files.profilePicture
            ? req.files.profilePicture[0].filename
            : "default-profile.png";
        const newAdmin = await ProfileServices.createAdmin({
          ...otherData,
          password: hashedPassword,
          profilePicture,
        });

        res.status(200).json({
          msg: "Admin Created Successfully",
          data: newAdmin,
        });
      } else {
        res.status(400).json({ msg: "Admin with this email already exists" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error", error });
    }
  }
  async getProfiles(req, res) {
    try {
      const profile = await profileServices.getProfiles();
      if (profile.length !== 0) {
        res.status(200).json({
          data: profile,
        });
      } else {
        res.status(400).json({
          msg: "No any profile found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server Error", error });
    }
  }
  async changePassword(req, res) {
    try {
      const { id } = req.params;
      const existProfile = await Profile.findOne({ _id: id });
      if (existProfile) {
        const { oldPassword, newPassword } = req.body;
        const isOldPasswordMatch = await bcrypt.compare(
          oldPassword,
          existProfile.password
        );
        console.log(isOldPasswordMatch);
        if (isOldPasswordMatch) {
          const changedPassword = await bcrypt.hashSync(newPassword, 10);
          console.log(changedPassword);
          const passwordChanged = await ProfileServices.changePassword(
            id,
            changedPassword
          );
          res.status(200).json({
            msg: "password changed successfully",
            passwordChanged,
          });
        } else {
          res.status(400).json({
            msg: "old password don't match",
          });
        }
      } else {
        res.status(400).json({
          msg: "No any profile found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server Error", error });
    }
  }
}

module.exports = new ProfileControllers();
