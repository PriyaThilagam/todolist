const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    deadline: {
        type: Date,
        required: true, 
    },
}, 
{
    timestamps: true,
});

const TodoModel = mongoose.model('tasks', todoSchema);

module.exports = TodoModel;
