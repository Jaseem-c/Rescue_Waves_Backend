// import mongoose
const mongoose = require("mongoose")
// create schema
const shelterSchema = new mongoose.Schema({
name:{
    required:true,
    type:String,
},
location:{
    required:true,
    type:String,
},
facilities:{
    required:true,
    type:String,
},
capacity:{
    type:Number,
    required:true,
},
availability:{
    type:Number,
    required:true,
},
photo:{
    type:String,
    required:true,
},

})

const shelters=mongoose.model("shelters",shelterSchema)

module.exports=shelters