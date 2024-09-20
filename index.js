// 1) import dotenv
require("dotenv").config();

// 2) import express
const express = require("express");

// 3) import cors
const cors = require("cors");

// 9) import router
const router = require("./routes");

// 4) create server
const rwServer = express();


// Import MongoDB connection file
require('./Connection');

// 7) connect server to front end
rwServer.use(cors());

// 8) parse the json data
rwServer.use(express.json());

// 10) use router
rwServer.use(router);

// 11) express.static()- to export files from server
rwServer.use("/uploads", express.static("./uploads"));

// 5) set port
const PORT = process.env.PORT || 4000;

// 6) listen on the port using http server instead of express server
rwServer.listen(PORT, () => {
  console.log(`Server Running Successfully on port ${PORT}`);
});
