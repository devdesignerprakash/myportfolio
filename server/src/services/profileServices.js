const Profile= require("../schemas/profileSchema")

class ProfileServices{
    async createAdmin(adminData){
        return await Profile.create(adminData)
    }
    async getProfiles(){
        return await Profile.find()
    }
    async changePassword(id,updatedPassword){
        console.log(id,updatedPassword)
        return await Profile.findOneAndUpdate({_id:id},{password:updatedPassword}, {new:true})
    }
}
module.exports=new ProfileServices()