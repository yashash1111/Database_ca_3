const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        default:"pending"
    },
    assignedTo: {
        ref: User
    }
})

const taskSc = mongoose.model('taskSc', taskSchemaSchema);
module.exports = taskSc