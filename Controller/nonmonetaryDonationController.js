const nonmonetaryDonations = require("../Model/nonmonetaryMOdel")



// to addvnon monetary donation details
exports.addnonmonetaryDonations=async(req,res)=>{
    const {name,email,donationType,PickupAddress,donationDate,status,noOfItems}=req.body
    const userId=req.payload
   res.status(200).json(userId)

   try {
    const newnonmonetaryDonation=new nonmonetaryDonations({
        name,
        Email:email,
        donationType,
        PickupAddress,
        userId:userId,
        donationDate,
        noOfItems,
        status,
    })
    await newnonmonetaryDonation.save()
   } catch (error) {
    res.status(401).json(error)
   }
}

// to get all non monetary donations
exports.getAllnonmonetaryDonations=async(req,res)=>{
    try {
        const allnonmonetaryDonations=await nonmonetaryDonations.find()
        res.status(200).json(allnonmonetaryDonations)
    } catch (error) {
        res.status(400).json(error)
    }
}
// to update status of non monetarydonations
exports.updateNonMonetaryDonationStatus=async(req,res)=>{
    const {id}=req.params

    try {
        const updateDonationStatus=await nonmonetaryDonations.findByIdAndUpdate({_id:id},{
            status:"Collected"
        },{new:true})
        res.status(200).json("updated successfull")
    } catch (error) {
        res.status(401).json(error)
    }
}

// to get userNonmonetarydonations
exports.getUserNonMonetaryDonations=async(req,res)=>{
    const userId=req.payload
    
    try {
        const userNonmonetarydonations=await nonmonetaryDonations.find({userId,status:"Collected"})
        res.status(200).json(userNonmonetarydonations)
    } catch (error) {
        res.status(401).json(Error)
    }
}
// to get all collected non monetary donations
exports.getAllCollectedNonMonetaryDonations=async(req,res)=>{
    try {
        const allCollectedNonMonetaryDonations=await nonmonetaryDonations.find({status:"Collected"})
        res.status(200).json(allCollectedNonMonetaryDonations)
    } catch (error) {
        res.status(401).json(error)
    }
}