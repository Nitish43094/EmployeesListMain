const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
    }
})

module.exports = mongoose.model("Admin",adminSchema);
