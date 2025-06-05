import express from 'express';
import http from 'http';
import dotenv from "dotenv";
import { Server } from 'socket.io';

dotenv.config()
const app = express();
const server = http.createServer(app);
const onlineUsersMap = {};  // socketId -- UserId
let allowedOrigins = process.env.ALLOWED_ORIGINS;

if(process.env.NODE_ENV === "development") {
    allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map(origin => origin.trim());
}

const io = new Server(server, {
    cors: {
        origin : allowedOrigins
    }
}); 

const getSocketIdFromUserId = (userId) => {
    return Object.keys(onlineUsersMap).find((socketId) => {
       return onlineUsersMap[socketId] === userId;
    })
};

io.on("connection", socket => {

    socket.on("addUserToOnlineList", (userId) => {
        onlineUsersMap[socket.id] = userId;
        io.emit("updatedOnlineUsersList", Object.values(onlineUsersMap));
    })

    socket.on("typing", (receiverId, senderId) => {
        const receiverSocketId = getSocketIdFromUserId(receiverId);
        io.to(receiverSocketId).emit("senderTyping", senderId);
    })

    socket.on("typingOver", (receiverId, senderId) => {
        const receiverSocketId = getSocketIdFromUserId(receiverId);
        io.to(receiverSocketId).emit("senderTypingOver", senderId);
    })

    socket.on("disconnect", () => {
        delete onlineUsersMap[socket.id];
        io.emit("updatedOnlineUsersList", Object.values(onlineUsersMap));
    })
})

export {io, app, server, getSocketIdFromUserId};