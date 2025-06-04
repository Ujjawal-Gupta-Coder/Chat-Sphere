import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const authenticateUser = async (req, res, next) => {
    const port = req.headers["x-port"];
    const token = req.cookies[`token_${port}`]; 
    
    if(!token) {
        return res.status(401).json({
            message : "Token not provided",
            success : false
        })
    }
    try {
       const { userID } =  jwt.verify(token, process.env.SECRET_KEY_JWT);
       const user = await userModel.findById(userID).select('-password');
        if(!user) {
            return res.status(404).json({
                message : "User not found",
                success : false,
            })
        }
        req.user = user;
        next();
    } catch(error) {
        console.log("Error in authenticate user : ", error);

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message : "Token has expired",
                success : false,
            })
        } 
        else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                message : "Invalid token",
                success : false,
            })
        }
        

        return res.status(500).json({
            message : "Internal server error",
            success : false,
        })
    }
};