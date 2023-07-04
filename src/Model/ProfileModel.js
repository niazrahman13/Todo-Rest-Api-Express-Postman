// Require mongoose library

const mongoose = require('mongoose')

// Create Model

const model = mongoose.Schema({

    Name:{type:String},
    Id:{type:String},
    Dept:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String}

},{versionKey:false})

const profileModel = mongoose.model('profiles',model)

module.exports = profileModel
