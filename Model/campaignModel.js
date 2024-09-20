const mongoose=require("mongoose")

const campaignSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    description:{
        required:true,
        type:String,
    },
    donationItems: {
        type: [String], // This defines an array of strings
        required: true,
      },
      dropoffLocation:{
        type: [String], // This defines an array of strings
        required: true,
      },
      date:{
        type:String,
        required:true
      },
      time:{
        type:String,
        required:true
      },
      contact:{
        type:String,
        required:true
      },
      image:{
        type:String,
        required:true
      }
})

const campaigns=mongoose.model("campaigns",campaignSchema)

module.exports=campaigns