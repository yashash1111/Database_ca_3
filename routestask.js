const express = require('express');
const User = require('./schema2')
const server = require('./server');

const postTask = async(req, res)=>{
    try{
        const {Name, email}=req.body
        if(!Name || !email){
            return res.status(400).json({message: "All fields are required"})
        }
        const task = await User.findOne(email);
        if(!task){
            return res.status(400).json({message: "Task did not complete"})
        } 
        await task.save()
        return res.status(201).json({message: "Task completed succesfully"})
    }catch(err){
        return res.status(500).json({message: "Internal server error"})
    }
}

module.exports = postTask 