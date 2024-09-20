// import mongoose
const mongoose = require("mongoose")
// create schema
const nonmonetaryDonationSchema = new mongoose.Schema({
name:{
    required:true,
    type:String,
},
Email:{
    required:true,
    type:String,
},
donationType:{
    required:true,
    type:String,
},
noOfItems:{
    required:true,
    type:Number
},
donationDate:{
    type:String,
    required:true,
},
userId:{
    type:String,
    required:true,
},
PickupAddress:{
    type:String,
    required:true
},
status:{
    type:String,
    required:true,
}
});

const nonmonetaryDonations=mongoose.model("nonmonetaryDonations",nonmonetaryDonationSchema)

module.exports=nonmonetaryDonations