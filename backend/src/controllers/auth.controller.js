import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/helper.js';
import cloudinary from '../config/cloudinary.js';


export const signup = async (req, res) => {
    
    if(!req.body || !req.body.fullName || !req.body.password || !req.body.email) {
        return res.status(400).json({
            message : "Insufficient data provided",
            success : false
        })
    }

    const {email, password, fullName} = req.body;

    if(password.length < 6) {
        return res.status(400).json({
            message : "Password must be at least 6 characters long",
            success : false,
        })
    }
    
    try {
        const user = await userModel.findOne({email});
        if(user) {
            return res.status(409).json({
                message : "User already exist",
                success : false,
            })
        }


        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.insertOne({
            email, 
            password : hashPassword,
            fullName
        });

        console.log("New User created Successfully : ", newUser);

        const port = req.headers["x-port"] || "5173";
        generateToken(newUser._id, res, port);

        return res.status(201).json({
            message : "User Created Successfully",
            success : true,
        })

    } catch(error) {
        console.log("Error in User Creation/Signup: ", error);
        
        if(error.name === "ValidationError") {
            return res.status(400).json({
                message : "Schema Validation Fails",
                success : false,
            })
        }

        return res.status(500).json({
            message : "Internal Server Error",
            success : false,
        })
    }



}

export const login = async (req, res) => {

    if(!req.body || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message : "Insufficient data provided",
            success : false
        })
    }
    const {email, password} = req.body;
    if(password.length < 6) {
        return res.status(400).json({
            message : "Password must be at least 6 characters long",
            success : false,
        })
    }

    try {
        const user = await userModel.findOne({email});
        
        if(!user) {
            return res.status(401).json({
                message : "email or password is incorrect",
                success : false
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        
        if(!isPasswordCorrect) {
            return res.status(401).json({
                message : "email or password is incorrect",
                success : false
            })
        }
        
        const port = req.headers["x-port"] || "5173";
        generateToken(user._id, res, port);

        return res.status(200).json({
            message : "User login successfully",
            success : true,
        })

    } catch(error) {
        console.log("Error in user Login: ", error);
        return res.status(500).json({
            message : "Internal server error",
            success : false,
        })
    }
}

export const logout = (req, res) => {
    const port = req.headers["x-port"] || "5173";
    try {
        res.cookie(`token_${port}`, "", {
            maxAge : 0,
        })

        return res.status(200).json({
            message : "User logout successfully",
            success : true,
        })
    } catch(error) {
        console.log("Error in user logout: ", error);
        return res.status(500).json({
            message : "Internal server error",
            success: false,
        })
    }
}

export const updateProfile = async (req, res) => {
    // image as **base64 string** 
    try {
        const image = req.body.image;
        const userId = req.user._id;

        if(!image) {
            return res.status(400).json({
                message : "Profile picture not provided",
                success : false,
            })
        }
        

        const cloudResponse = await cloudinary.uploader.upload(image, {
            folder: 'chatsphere/users',
            use_filename: true,
            unique_filename: false,
            public_id: userId,      
            overwrite: true
        });

        const updatedUser = await userModel.findByIdAndUpdate(userId,{
        profilePicture: cloudResponse.secure_url
        }, {new : true})

        return res.status(200).json({
            message : "Profile picture updated successfully",
            profilePicURL : updatedUser.profilePicture,
            success : true
        })
    } catch(error) {
        console.log("Error in update profile route: ", error)
        if(error.http_code === 500) {
            return res.status(500).json({
                message: "internal server error",
                success: false
            })
        } else {
            return res.status(error.http_code).json({
                message : "Profile Picture upload failed",
                success: false
            })
        }   
    }
    
}

export const checkUser = (req, res) => {
    try {
        return res.status(200).json({
            message : "User authentication successful",
            success : true,
            user : req.user,
        }) 
    } catch(error) {
        console.log('Error in check user authenticate: ', error)
        return res.status(500).json({
            message : "Internal server error",
            success : false
        })
    }
}
