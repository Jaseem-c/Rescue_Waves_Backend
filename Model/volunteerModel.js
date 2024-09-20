// import mongoose
const mongoose = require("mongoose")
// create schema
const volunteerSchema = new mongoose.Schema({
name:{
    required:true,
    type:String,
},
phoneNo:{
    required:true,
    type:String,
},
address:{
    required:true,
    type:String,
},
status:{
    type:String,
    required:true,
},
program:{
    type:String,
    required:true,
},
date:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
profile:{
    type:String,
    required:true,
},
userId:{
    required:true,
    type:String,
}
})

const voulnteers=mongoose.model("volunteers",volunteerSchema)

module.exports=voulnteers