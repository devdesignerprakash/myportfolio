const express = require('express')
const app=express()
const dotenv= require('dotenv')
const cors= require('cors')
const dbconnection = require('./config/dbconfig')

dotenv.config()
app.use(cors())
app.use(express.json())
dbconnection

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on PORT ${process.env.PORT}`)
})
