import express from "express"
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", authenticateUser, getUsersForSidebar);
router.get("/:id", authenticateUser, getMessages)
router.post("/send/:id", authenticateUser, sendMessage)

export default router;