const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    email: String,
    content: String
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;