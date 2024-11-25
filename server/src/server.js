const express = require('express')
const app=express()
const dotenv= require('dotenv')
const cors= require('cors')
const dbconnection = require('./config/dbconfig')
const profileRoutes= require('./routes/profileRoutes')

dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/',profileRoutes)
dbconnection


app.listen(process.env.PORT,()=>{
    console.log(`app is listening on PORT ${process.env.PORT}`)
})
