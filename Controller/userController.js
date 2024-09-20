const users = require("../Model/userModel");
const bcrypt = require("bcrypt");  // Import bcrypt
const jwt = require("jsonwebtoken");

// Register controller
exports.registerController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            res.status(400).json("User already exists");
        } else {
            // Hash the password before saving
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = new users({
                username,
                email,
                password: hashedPassword,  // Save the hashed password
                address: "",
                contact: "",
                profile: ""
            });
            await newUser.save();
            res.status(200).json("Registration successful");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login controller
exports.loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            // Compare the password with the hashed password
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if (isMatch) {
                const token = jwt.sign({ userId: existingUser._id },"supersecretkey");
                res.status(200).json({ existingUser, token });
            } else {
                res.status(401).json("Invalid credentials");
            }
        } else {
            res.status(401).json("Account doesn't exist");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// get all users(admin)
exports.getAllUserController = async (req, res) => {
    try {
        const allUsers=await users.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(401).json(error);
    }
}
// to delete user(admin)
exports.deleteUserController = async (req, res) => {
    const {id}=req.params
    try {
        const item=await users.findByIdAndDelete({_id:id})
        res.status(200).json("Deleted successfully")
    } catch (error) {
        res.status(401).json(error);
    }
}
// to update profile 
exports.updateUserController = async (req, res) => {
    const {username,email,password,address,contact,profile}=req.body
    const profileImg=req.file?req.file.filename:profile
    const userId=req.payload
    try {
        const existingUser=await users.findByIdAndUpdate({_id:userId},{
            username,
            email,
            password,
            address,
            contact,
            profile:profileImg
        },{new:true})
        await existingUser.save()
        res.status(200).json(existingUser)
    } catch (error) {
        res.status(401).json(error)
    }
}