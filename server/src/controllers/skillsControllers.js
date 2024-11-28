const skills = require("../schemas/skillsSchema");
const skillServices = require("../services/skillServices");

class SkillsControllers{
    async createSkills(req,res){
        try {
            const {skillType}=req.body
            const existSkill = await skills.findOne({ skillType });
        
            if (!existSkill) {
                const image =  req.files && req.files.image ? req.files.image[0].filename : "default-image.png";
                const newSkill = await skillServices.createSkills({
                   skillType,image:image
                });
        
                res.status(200).json({
                    msg: "Skills created Successfully",
                    data: newSkill,
                });
            } else {
                res.status(400).json({ msg: "These Skills is already exist" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Server error", error });
        }
       
    }
    async getSkills(req,res){
        try{
            const skillList= await skillServices.getSkills()
            if(skillList.length!==0){
                res.status(200).json({
                    skillList
                })
            }
            else{
                res.status(400).json({
                    msg:"No data found"
                })
            }
        }catch(error){
            res.status(500).json({ msg: "Server error", error });
        }
        
    }
    async getSkill(req,res){
        try{
            const {id}=req.params
            const skill= await skillServices.getSkill({id:id})
            
            if(skill){
                res.status(200).json({
                skill
                })
            }
            else{
                res.status(400).json({
                    msg:"No data found"
                })
            }
        }catch(error){
            res.status(500).json({ msg: "Server error", error });
        }
    }
    async updateSkill(req,res){
        try{
            const {id}= req.params
            const skillExist= await skills.findOne({id:id})
            if(skillExist){
                let {skillType}=req.body
                let image = skillExist.image; 
                if (req.files && req.files.image) {
                    image = req.files.image[0].filename; 
                }
                let updatedData={skillType,image}
                const updatedSkill= await skillServices.updateSkill(id,updatedData)
                res.status(200).json({
                    msg:"updated Successfully",
                    updatedSkill
                })

            }else{
                res.status(400).json({
                    msg:"No data Found"
                })
            }

        }catch(error){
            res.status(500).json({ msg: "Server error", error });
        }

    }
    async deleteSkill(req,res){
        try{
            const {id}= req.params
            const skillExist= await skills.findOne({id:id})
            if(skillExist){
                const deletedSkill= await skillServices.deleteSkill(id)
                
                res.status(200).json({
                    msg:"deleted Successfully",
                    deletedSkill
                })

            }else{
                res.status(400).json({
                    msg:"No data Found"
                })
            }

        }catch(error){
            res.status(500).json({ msg: "Server error", error });
        }

    }
    
}
module.exports= new SkillsControllers()