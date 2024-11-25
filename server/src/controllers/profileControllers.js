const Profile = require('../schemas/profileSchema')
const ProfileServices=require('../services/profileServices')
const bcrypt= require('bcrypt')

class ProfileControllers{
    async createAdmin(req,res){
        try{
            const existAdmin= await Profile.findOne({email:req.body.email})
            if(!existAdmin){
                const {password,...otherData}= req.body
                const hashedPassword= await bcrypt.hashSync(password,10)
                const profilePicture = req.file ? req.file.filename : "default-profile.png";
                const newAdmin= await ProfileServices.createAdmin({...otherData, password:hashedPassword, profilePicture})
                res.status(200).json({
                    msg:"Admin Created Successfully",
                    data:newAdmin
                })
            }
            else{
                res.status(400).json({
                    msg:"admin already Exist"
                })
            }
        }catch(error){
            res.status(500).json({
                msg:error.message
            })
        }
    }
}

module.exports= new ProfileControllers()