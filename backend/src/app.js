import express from "express"
import {app, server} from "./config/socket.js"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map(origin => origin.trim());


app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages/", messageRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectDB();
})
