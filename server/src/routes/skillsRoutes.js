const express = require('express')
const SkillsControllers= require('../controllers/skillsControllers')
const uploadFields = require('../middlewares/upload')

const router= express.Router()
router.post('/skills',uploadFields,SkillsControllers.createSkills)
router.get('/skills',SkillsControllers.getSkills)
module.exports=router