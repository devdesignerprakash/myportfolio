const Profile = require('../schemas/profileSchema')
const ProfileServices=require('../services/profileServices')
const bcrypt= require('bcrypt')

class ProfileControllers{
    async createAdmin(req,res){
        try {
            const existAdmin = await Profile.findOne({ email: req.body.email });
        
            if (!existAdmin) {
                const { password, skills, ...otherData } = req.body;
                const hashedPassword = await bcrypt.hashSync(password, 10);
        
                const profilePicture = req.files && req.files.profilePicture ? req.files.profilePicture[0].filename : "default-profile.png";
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
    async getSkills(req,res){
        
    }
}

module.exports= new ProfileControllers()