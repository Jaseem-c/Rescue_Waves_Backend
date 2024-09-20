const shelters = require("../Model/ShelterModel")


// to add shelter
exports.addShelterController=async(req,res)=>{

    const {name,location,facilities,capacity,availability}=req.body

    const shelterImage=req.file.filename

    // res.status(200).json(name)

    try {
        const existingShelter=await shelters.findOne({name:name})

        if(existingShelter){
            res.status(406).json("Already exists")
        }
        else{
            const newShelter=new shelters({
                name,
                location,
                facilities,
                capacity,
                availability,
                photo:shelterImage
        })
        await newShelter.save()
        res.status(200).json("Shelter Added Successfully")
        }

        
    } catch (error) {
        res.status(401).json(error)
    }
}

// to get shelters for admin
exports.getAllShelterController=async(req,res)=>{



    try {
        const allShelters=await shelters.find()
        res.status(200).json(allShelters)
    } catch (error) {
        res.status(401).json(error)
    }

}
// to get shelter details(user)
exports.getShelterController=async(req,res)=>{

    const serachKey=req.query.search
    console.log(serachKey);
    
    const query={
        location:{
            // options-i => to remove case sensitivity
            $regex:serachKey,$options:"i"
        }
    }

    try {
        const allShelters=await shelters.find(query)
        res.status(200).json(allShelters)
    } catch (error) {
        res.status(401).json(error)
    }

}

// to delete shelter
exports.deleteShelterController=async(req,res)=>{

    const {id}=req.params
    try {
        const item=await shelters.findByIdAndDelete({_id:id})
        res.status(200).json("Deleted successfully")
    } catch (error) {
        res.status(401).json(error)
    }
}