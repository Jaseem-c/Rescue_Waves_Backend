const shelterBookingDetails = require("../Model/shelterBookingModel")
const shelters = require("../Model/ShelterModel")

// to add shelter bookings
exports.addShelterBookingController = async (req, res) => {
    const { shelterName, email, phone, location, noOfPeople, BookingDate, BookingStatus, name } = req.body

    const userId = req.payload

    try {

        const shelter = await shelters.findOne({ name: shelterName })
        if (!shelter) {
            return res.status(404).json({ message: "Shelter not found" });
        }

        // Check if the shelter has enough availability
        if (shelter.availability < noOfPeople) {
            return res.status(400).json({ message: "Shelter does not have enough availability" })

        }
        else {
            // Update the shelter's availability
            shelter.availability -= noOfPeople;
            await shelter.save();
            const NewBookingUser = await shelterBookingDetails({
                shelterName, email, phone, location, noOfPeople, BookingDate, BookingStatus, name, userId
            })
            await NewBookingUser.save()
            res.status(200).json({message:"Booking Successfull"})

        }

    } catch (error) {
        res.status(401).json({message:error})
    }
}

// to get userbooking details
exports.getUserBookingDetailsController = async (req, res) => {
    const userId = req.payload
    // res.status(200).json(userId)

    try {
        const userBookingDetails=await shelterBookingDetails.find({userId})
        res.status(200).json(userBookingDetails)
    } catch (error) {
        res.status(401).json(error)
    }

}
// to get allbooking details
exports.getAllBookingDetailsController = async (req, res) => {

    try {
        const allBookingdDetails=await shelterBookingDetails.find()
        res.status(200).json(allBookingdDetails)
    } catch (error) {
        res.status(401).json(error)
    }
}