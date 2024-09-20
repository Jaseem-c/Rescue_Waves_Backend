const monetaryDonations = require("../Model/monetaryDonationModel")


// to add monetary donation details
exports.addmonetaryDonations=async(req,res)=>{
    const {name,email,donationAmount,donationDate}=req.body
    const userId=req.payload
    // res.status(200).json(userId)

    try {

        const newMonetaryDonation=new monetaryDonations({
            name,
            Email:email,
            donationAmount,
            userId:userId,
            donationDate,
        })
        await newMonetaryDonation.save()
        res.status(200).json({message:"Monetary Donation Added Successfully",newMonetaryDonation})
    } catch (error) {
        res.status(401).json(error)
    }
}

// to get all monetarydonations
exports.getAllmonetaryDonations=async(req,res)=>{

   try {
    const allMonetaryDonations= await monetaryDonations.find()
    res.status(200).json(allMonetaryDonations)
   } catch (error) {
    res.status(401).json(error)
   }
}
// to get usermonetary donations
exports.getUserMonetaryDonations=async(req,res)=>{
    const userId=req.payload
    try {
        const usermonetaryDonations=await monetaryDonations.find({userId})
        res.status(200).json(usermonetaryDonations)
    } catch (error) {
        res.status(400).json(error)
    }
}