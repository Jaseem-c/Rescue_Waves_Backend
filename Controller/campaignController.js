const { json } = require("express")
const campaigns = require("../Model/campaignModel")


// to add campaign
exports.addCampaignController=async(req,res)=>{

    const {title,description,donationItems,dropoffLocation,date, time,contact}=req.body
    
   
    
    const campaignImage=req.file.filename
    const items=donationItems.split(',').map(item=>item.trim())
    // res.status(200).json({items})
    const location=dropoffLocation.split(',').map(item=>item.trim())

    try {
        const existingCampaign=await campaigns.findOne({date})
        if(existingCampaign)
        {
            res.status(406).json("campaign already exist")
        }
        else{
            
            const newCampaign=new campaigns({
                title:title,
                description,
                donationItems:items,
                dropoffLocation:location,
                date,
                time,
                contact,
                image:campaignImage
            });
            await newCampaign.save()
            res.status(200).json("Campaign added successfully");
        }
    } catch (error) {
        res.status(401).json(error)
        
    }
}

// to retreive campaign
exports.getAllCampaignController=async(req,res)=>{
    try {
        const allCampaigns=await campaigns.find()
        res.status(200).json(allCampaigns)
    } catch (error) {
        res.status(401).json(error)
    }
}
// to delte campaign
exports.deleteCampaignController=async(req,res)=>{

    const {id}=req.params

    try {
        const item=await campaigns.findByIdAndDelete({_id:id})
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(401).json(error)
    }
}
// to get homecampaigns
exports.getHomeCampaignsController=async(req,res)=>{
    try {
        const homeCampaigns= await campaigns.find().limit(2)
        res.status(200).json(homeCampaigns)
    } catch (error) {
        res.status(401).json(error)
    }
    
}