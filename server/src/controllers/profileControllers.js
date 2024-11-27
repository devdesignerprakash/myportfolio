const Profile = require('../schemas/profileSchema')
const ProfileServices=require('../services/profileServices')
const bcrypt= require('bcrypt')

class ProfileControllers{
    async createAdmin(req,res){
        console.log(req)
        console.req.body
        try {
            const existAdmin = await Profile.findOne({ email: req.body.email });
        
            if (!existAdmin) {
                const { password, skills, ...otherData } = req.body;
                const hashedPassword = await bcrypt.hashSync(password, 10);
        
                const profilePicture = req.files && req.files.profilePicture ? req.files.profilePicture[0].filename : "default-profile.png";
        
                let skillsWithImages = [];
                if (req.files && req.files['skills.image']) {
        
                    skillsWithImages = skills.map((skill, index) => {
                  
                        const skillImage = req.files['skills.image'][index] ? req.files['skills.image'][index].filename : "default-skill.png";
                        return { ...skill, image: skillImage }; l
                    });
                }
        
                const newAdmin = await ProfileServices.createAdmin({
                    ...otherData,
                    password: hashedPassword,
                    profilePicture,
                    skills: skillsWithImages,  
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
    
}

module.exports= new ProfileControllers()