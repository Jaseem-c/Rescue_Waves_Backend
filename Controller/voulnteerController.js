const volunteerPrograms = require("../Model/programsModel")
const voulnteers = require("../Model/volunteerModel")


// to add volunteer details
exports.addVolunteerController=async(req,res)=>{
   
    

    const {name,phoneNo,address,status,program,date,location,profile}=req.body

    const VolunteerProfile=req.file?req.file.filename:profile

    const userId=req.payload
    //  res.status(200).json(userId)

    try {
        const existingVolunteer= await voulnteers.findOne({program,date,userId})

        if(existingVolunteer)
        {
            res.status(406).json("already registered")
        }
        else{
            const newVolunteer=new voulnteers({
                name,
                phoneNo,
                address,
                status,
                program,
                date,
                location,
                profile:VolunteerProfile,
                userId,
            })
            await newVolunteer.save()
            res.status(200).json("Registered successfully")
        }


    } catch (error) {
        res.status(401).json(error)
    }

}

// to get allvolunteer details
exports.getAllVolunteerController=async(req,res)=>{
    try {
        const allVolunteerDetails=await voulnteers.find()
        res.status(200).json(allVolunteerDetails)
    } catch (error) {
        res.status(401).json(error)
    }
}

// to  update volunteer status
exports.updateVolunteerStatusController=async(req,res)=>{

    const {id}=req.params
    console.log(id);
    

    try {
    const updateStatus= await voulnteers.findByIdAndUpdate({_id:id},{
        status:"Completed"
    },{new:true})
    res.status(200).json(updateStatus)
    } catch (error) {
        res.status(401).json(error)
    }
}

// to get user participations
exports.getUserParticipationController=async(req,res)=>{
    const userId=req.payload

    try {
        const userparticpation=await voulnteers.find({userId:userId})
        res.status(200).json(userparticpation)
    } catch (error) {
        res.status(error)
    }
}
