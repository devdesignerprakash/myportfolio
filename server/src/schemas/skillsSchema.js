const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const skillsSchema= new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true,
      },
    skillType:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true

    },
    
})
const skills= mongoose.model('skills',skillsSchema)
module.exports= skills