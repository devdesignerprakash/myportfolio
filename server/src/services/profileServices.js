const Profile= require("../schemas/profileSchema")

class ProfileServices{
    async createAdmin(adminData){
        return await Profile.create(adminData)
    }
    async getProfiles(){
        return await Profile.find()
    }
}
module.exports=new ProfileServices()