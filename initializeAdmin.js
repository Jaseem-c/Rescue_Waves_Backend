// initializeAdmin.js
const Admin = require('./Model/adminModel'); // Adjust the path to your Admin model
require('dotenv').config();

 const initializeAdmin=async()=> {
    try {
        // Check if an admin already exists
        const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });

        if (!existingAdmin) {
            // Create a new admin with the credentials from the .env file
            const newAdmin = new Admin({
                email: process.env.ADMIN_EMAIL,
                password: process.env.ADMIN_PASSWORD, // Store in plain text (not recommended)
            });

            await newAdmin.save();
            console.log('Admin created with credentials from .env file');
        } else {
            console.log('Admin already exists');
        }
    } catch (error) {
        console.error('Error during admin initialization:', error);
    }
}

module.exports = initializeAdmin;
