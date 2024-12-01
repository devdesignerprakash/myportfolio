const Profile= require("../schemas/profileSchema")

class ProfileServices{
    async createAdmin(adminData){
        return await Profile.create(adminData)
    }
    async getProfiles(){
        return await Profile.find()
    }
    async changePassword(id,updatedPassword){
        return await Profile.findOneAndUpdate({_id:id},{password:updatedPassword}, {new:true})
    }
    async changeProfilePicture(id,updatedProfile){
        console.log(id,updatedProfile)
        return await Profile.findOneAndUpdate({_id:id},{profilePicture:updatedProfile}, {new:true})
    }
}
module.exports=new ProfileServices()