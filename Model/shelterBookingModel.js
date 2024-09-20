// import mongoose
const mongoose = require("mongoose")
// create schema
const shelterBookingSchema = new mongoose.Schema({
shelterName:{
    required:true,
    type:String,
},
name:{
    required:true,
    type:String,
},
email:{
    required:true,
    type:String,
},
phone:{
    required:true,
    type:String,
},
location:{
    required:true,
    type:String,
},
noOfPeople:{
    required:true,
    type:Number,
},
BookingDate:{
    type:String,
    required:true,
},
BookingStatus:{
    type:String,
    required:true,
},
userId:{
    type:String,
    required:true,
}
})

const shelterBookingDetails=mongoose.model("shelterBookingDetails",shelterBookingSchema)

module.exports=shelterBookingDetails