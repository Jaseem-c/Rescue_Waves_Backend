const volunteerPrograms = require("../Model/programsModel")


// to add voulnteer programs(admin)
exports.addVolunteerProgramsController=async(req,res)=>{

    const {title,description,date,time,location}=req.body
    const voulnteerImg=req.file.filename
    // res.status(200).json("success")

    try {
        const existingProgram=await volunteerPrograms.findOne({date})
        if(existingProgram)
        {
            res.status(406).json("already exist")
        }
        else{
            const newProgram=new volunteerPrograms({
                title,
                description,
                date,
                time,
                location,
                image:voulnteerImg
            })
            await newProgram.save()
            res.status(200).json("added successfully")
        }

        
    } catch (error) {
        res.status(401).json(error)
    }
}

// to get volunteer programs
exports.getVolunteerProgramsController=async(req,res)=>{
    try {
        const allPrograms=await volunteerPrograms.find()
        res.status(200).json(allPrograms)
    } catch (error) {
        res.status(406).json(error)
    }
}
// to delete volunteer program
exports.deleteVolunteerProgramsController=async(req,res)=>{
    const {id}=req.params
    try {
        const item=await volunteerPrograms.findByIdAndDelete({_id:id})
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(406).json(error)
    }
}

// to get home programs
exports.getHomeProgramsController=async(req,res)=>{
     try {
        const homePrograms=await volunteerPrograms.find().limit(3)
        res.status(200).json(homePrograms)
        
     } catch (error) {
        res.status(401).json(Error)
     }
}