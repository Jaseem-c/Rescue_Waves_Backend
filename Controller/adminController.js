const Admin = require('../Model/adminModel'); // Adjust the path to your Admin model
require('dotenv').config();

exports.adminController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { email, password } = req.body;

        // Check if an admin exists with the provided email
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // For simplicity, we're comparing passwords in plain text here (not recommended for production)
        if (admin.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Admin logged in successfully' });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
