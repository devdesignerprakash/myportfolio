const express = require('express')
const profileControllers = require('../controllers/profileControllers')
const uploadFields = require('../middlewares/upload')
const router= express.Router()
router.post('/admin',uploadFields,profileControllers.createAdmin)
router.get('/profile',profileControllers.getProfiles)
module.exports=router