// import express
const express=require("express")
// import user controller
const userController = require("./Controller/userController");
// import admin controller
const adminController = require("./Controller/adminController");
// import campaign controller
const campaignController = require("./Controller/campaignController");
// // routing based on the class Routes present in the express library
// import programsController
const programsController = require("./Controller/programsController");
// import volunteer controller
const volunteerController = require("./Controller/voulnteerController");
// import shelter controller
const shelterController=require("./Controller/shelterController")
// imprt shelterbboking controller
const shelterBookingController=require("./Controller/shelterBookingController")
// import monetary donation control
const monetaryDonationController = require("./Controller/monetaryDonationController");
// import nonMonetaryDonationController
const nonMonetaryDonationController = require("./Controller/nonmonetaryDonationController");
// import chat controller
const chatController = require("./Controller/chatController");

const jwtMiddleware=require("./Middleware/Jwt")

// create object
const router=new express.Router()


// import multer
const multer = require("./Middleware/multer");

// regsister
router.post("/register",userController.registerController)
// login
router.post("/login",userController.loginController)
// to login admin
router.post("/adminlogin",adminController.adminController)
// to get all users(admin)
router.get("/allusers",userController.getAllUserController)
// to delete user(admin)
router.delete("/deleteuser/:id",userController.deleteUserController)
// to add campaign(admin)
router.post("/add-campaign",multer.single("image"),campaignController.addCampaignController)
// to get all campaigns
router.get("/allcampaigns",campaignController.getAllCampaignController)
// to delete campaign(admin)
router.delete("/deletecampaign/:id",campaignController.deleteCampaignController)
// to get homecampaigns(user)
router.get("/homecampaigns",campaignController.getHomeCampaignsController)

// .volunteer programs
// to add volunteer programs
router.post("/add-volunteerprogram",multer.single("image"),programsController.addVolunteerProgramsController)
// to get volunteer programs
router.get("/all-volunteerprograms",programsController.getVolunteerProgramsController)
// to delete volunteer programs(admin)
router.delete("/delete-volunteerprogram/:id",programsController.deleteVolunteerProgramsController)
// to get homeprograms
router.get("/home-volunteerprograms",programsController.getHomeProgramsController)

// to add volunteer details
router.post("/add-volunteer",jwtMiddleware,multer.single("profile"),volunteerController.addVolunteerController)
// to get volunteer details
router.get("/all-volunteers",volunteerController.getAllVolunteerController)
// to update volunteer
router.put("/update-volunteer/:id",volunteerController.updateVolunteerStatusController)
// to get userparticipations
router.get("/user-participations/",jwtMiddleware,volunteerController.getUserParticipationController)


// to add shelter(admin)
router.post("/add-shelter",multer.single("photo"),shelterController.addShelterController)
// to get shelters(admin)
router.get("/all-shelters",shelterController.getAllShelterController)
// to delete shelter(admin)
router.delete("/delete-shelter/:id",shelterController.deleteShelterController)
// to get shelters for users(query parameter)
router.get("/shelters",shelterController.getShelterController)


// to add shelter booking details
router.post("/add-shelter-booking",jwtMiddleware,shelterBookingController.addShelterBookingController)
// to get userbooking details
router.get("/user-booking",jwtMiddleware,shelterBookingController.getUserBookingDetailsController)
// to get all userbooking details
router.get("/all-user-booking",shelterBookingController.getAllBookingDetailsController)


// to add monetary donations
router.post("/add-monetary-donation",jwtMiddleware,monetaryDonationController.addmonetaryDonations)
// to get all monetary donations
router.get("/all-monetary-donations",monetaryDonationController.getAllmonetaryDonations)
// to get user monetary daonation
router.get("/user-monetary-donation",jwtMiddleware,monetaryDonationController.getUserMonetaryDonations)


// to add non monetary donations
 router.post("/add-non-monetary-donation",jwtMiddleware,nonMonetaryDonationController.addnonmonetaryDonations)
/// to get all non monetary donations
router.get("/all-non-monetary-donations",nonMonetaryDonationController.getAllnonmonetaryDonations)
// to update status
router.put("/update-non-monetary-donation-status/:id",nonMonetaryDonationController.updateNonMonetaryDonationStatus)
// to get user non monetary donations
router.get("/user-non-monetary-donation",jwtMiddleware,nonMonetaryDonationController.getUserNonMonetaryDonations)
// to get  all collected non monetary donations
router.get("/all-collected-non-monetary-donations",nonMonetaryDonationController.getAllCollectedNonMonetaryDonations)

// to update profile
router.put("/update-profile",jwtMiddleware,multer.single("profile"),userController.updateUserController)


// chat 
//Api to post chat
router.post('/user/sendchat',chatController.sendMessage)
//Api to get chat
router.get('/getMessages/:userId1/:userId2',chatController.getMessages);
//Apin to get all chats
router.get('/all-chats',chatController.getAllMessage)

module.exports=router