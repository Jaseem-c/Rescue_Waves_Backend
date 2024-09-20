const mongoose = require("mongoose")

const volunteerProgramsSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


const volunteerPrograms = mongoose.model("volunteerPrograms", volunteerProgramsSchema)

module.exports = volunteerPrograms