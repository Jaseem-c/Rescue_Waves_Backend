// import mongoose
const mongoose = require("mongoose")
// create schema
const monetaryDonationSchema = new mongoose.Schema({
name:{
    required:true,
    type:String,
},
Email:{
    required:true,
    type:String,
},
donationAmount:{
    required:true,
    type:Number,
},
donationDate:{
    type:String,
    required:true,
},
userId:{
    type:String,
    required:true,
}
});

const monetaryDonations=mongoose.model("monetaryDonations",monetaryDonationSchema)

module.exports=monetaryDonations