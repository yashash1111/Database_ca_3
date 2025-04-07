const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
})



const userSc = mongoose.model('userSc', userSchema);
module.exports = userSc

