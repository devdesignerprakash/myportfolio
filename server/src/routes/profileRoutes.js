const express = require('express')
const profileControllers = require('../controllers/profileControllers')
const uploadImage = require('../middlewares/upload')
const router= express.Router()
router.post('/admin',uploadImage,profileControllers.createAdmin)
module.exports=router