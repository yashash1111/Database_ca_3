const express = require('express');
const User = require('./schema')
const server = require('./server');

const postUser = async(req, res)=>{
    try{
        const {Name, email}=req.body
        if(!Name || !email){
            return res.status(400).json({message: "All fields are required"})
        }
        const existing = await User.findOne(email);
        if(!email){
            return res.status(400).json({message: "Email does not exist. Please SIGNUP"})
        } 
        await existing.save()
        return res.status(201).json({message: "Logged in succesfully"})
    }catch(err){
        return res.status(500).json({message: "Internal server error"})
    }
}

module.exports = postUser 