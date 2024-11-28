const express = require('express')
const SkillsControllers= require('../controllers/skillsControllers')
const uploadFields = require('../middlewares/upload')

const router= express.Router()
router.post('/skills',uploadFields,SkillsControllers.createSkills)
router.get('/skills',SkillsControllers.getSkills)
router.get('/skills/:id',SkillsControllers.getSkill)
router.put('/skills/:id',uploadFields,SkillsControllers.updateSkill)
router.delete('/skills/:id',SkillsControllers.deleteSkill)
module.exports=router