// import mongoose
const mongoose=require("mongoose")
const initializeAdmin = require("./initializeAdmin")
// import url
const connectionUrl=process.env.DATABASE
// connect
mongoose.connect(connectionUrl).then(()=>{
    console.log("mongodb connected to successfully")
    initializeAdmin()
}).catch((err)=>{
    console.log(`mongodb connection failed due to error ${err}`)
})