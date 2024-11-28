const Skills = require('../schemas/skillsSchema')

class SkillsServices{
    async createSkills(skillsData){
        return await Skills.create(skillsData)
    }
    async getSkills(){
        return await Skills.find()
    }
}
module.exports=new SkillsServices()