const express = require('express')
const profileControllers = require('../controllers.js/profileControllers')
const router= express.Router()

router.post('/admin',profileControllers.createAdmin)

module.exports=router