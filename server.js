const express = require('express');
const { default: mongoose } = require('mongoose');
const { cache } = require('react');
require('dotenv').config
const app = express()
const PORT = 3010
const router = require('./endpint')


app.use(express.json())

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to database")
    }catch(err){
        console.log("Error connecting to database", err)
    }
}




app.listen(PORT, ()=>{
    console.log(`Server is running in local host https://localhost:${PORT}`)
})