const express = require('express')
const profileControllers = require('../controllers/profileControllers')
const uploadFields = require('../middlewares/upload')
const router= express.Router()
router.post('/admin',uploadFields,profileControllers.createAdmin)
router.get('/profile',profileControllers.getProfiles)
router.patch('/change-password/:id',profileControllers.changePassword)
module.exports=router