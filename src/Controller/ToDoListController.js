const mongoose = require('mongoose')

const todoDesign = mongoose.Schema({

    Name:{type:String},
    ToDoSubject:{type:String},
    ToDoDescription:{type:String},
    ToDoStatus:{type:String},
    ToDoCreationDate:{type:Date},
    ToDoUpdateDate:{type:Date}

},{versionKey:false})

const todoModel = mongoose.model('todos',todoDesign)

module.exports = todoModel