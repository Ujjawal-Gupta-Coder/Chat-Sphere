import userModel from "../models/user.model.js";
import messageModel from "../models/message.model.js";
import { mongoose } from "mongoose";
import cloudinary from '../config/cloudinary.js';
import { io, getSocketIdFromUserId } from "../config/socket.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;
        const allUsers = await userModel.find({_id : {$ne : userId}}).select("-password");

        return res.status(200).json({
            message : "Users retrieved successfully",
            success: true,
            allUsers
        })
    } catch(error) {
        console.log("Error in getting all users : ", error);
        return res.status(500).json({
            message : "Internal server error",
            success : false
        })
    }
}

export const getMessages = async (req, res) => {
    try {
        const currUserId = req.user._id;
        const chatUserId = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(chatUserId)) {
            return res.status(400).json({
                message : "Invalid user ID",
                success : false
            })
        }

        const messages = await messageModel.find({$or : 
        [
            {
                senderId : currUserId,
                receiverId : chatUserId
            },
            {
                senderId : chatUserId,
                receiverId : currUserId
            }
        ] })

        return res.status(200).json({
            message : "Message retrieved successfully",
            success : true,
            messages
        })
    } catch(error) {
        console.log("Error in getting messages : ", error);
        return res.status(500).json({
            message : "Internal server error",
            success : false
        })
    }  
}

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id;
        const receiverId = req.params.id;
        
        const { text, image } = req.body;

        if(!text && !image) {
            return res.status(400).json({
                message : "Either text message or image is required",
                success : false
            })
        }

        if(!mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({
                message : "Invalid receiver ID",
                success : false
            })
        }
        
        const receiver = await userModel.findById(receiverId).select("-password");
        if(!receiver) {
            return res.status(404).json({
                message : "Receiver not found",
                success : false
            })
        }

        let imageURL = "";
        if(image) {
            const cloudResponse = await cloudinary.uploader.upload(image, {
                folder: 'chatsphere/messages',
            });
            imageURL = cloudResponse.secure_url;
        }

        const chat = await messageModel.insertOne({
            senderId,
            receiverId,
            text,
            image : imageURL,
        });


        const receiverSocketId = getSocketIdFromUserId(receiverId);
        if(receiverSocketId) io.to(receiverSocketId).emit("messageSend", chat);

        return res.status(201).json({
            message : "Chat send successfully",
            success: true,
            chat
        })

    } catch(error) {
        console.log("Error in sending message: ", error);
        if(error.http_code === 500) {
            return res.status(500).json({
                message: "internal server error",
                success: false
            })
        } else {
            return res.status(error.http_code).json({
                message : "Image upload failed",
                success: false
            })
        }   
    }
}