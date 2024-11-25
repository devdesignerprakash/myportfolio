const Profile= require("../schemas/profileSchema")

class ProfileServices{
    async createAdmin(adminData){
        return await Profile.create(adminData)
    }
}
module.exports=new ProfileServices()