const mongoose= require('mongoose')
const dotenv= require('dotenv')
dotenv.config()

const dbconnection= mongoose.connect(`${process.env.MONGO_URI}/portfolio`)
.then(()=>{
    console.log("database is connected successfully")
}).catch(error=>console.log(error))

module.exports = dbconnection