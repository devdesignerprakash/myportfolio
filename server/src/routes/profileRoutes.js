const express = require('express')
const profileControllers = require('../controllers/profileControllers')
const uploadImages = require('../middlewares/upload')
const router= express.Router()
router.post('/admin',uploadImages,profileControllers.createAdmin)
module.exports=router