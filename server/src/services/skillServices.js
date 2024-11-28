const Skills = require('../schemas/skillsSchema')

class SkillsServices{
    async createSkills(skillsData){
        return await Skills.create(skillsData)
    }
    async getSkills(){
        return await Skills.find()
    }
    async getSkill(id){
        return await Skills.findOne(id)
    }
    async updateSkill(id,updatedData){
        return await Skills.findOneAndUpdate({id},updatedData,{new:true})
    }
    async deleteSkill(id){
        return await Skills.findOneAndDelete(id)
    }
}
module.exports=new SkillsServices()