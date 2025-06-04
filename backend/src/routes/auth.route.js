import express from "express"
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { checkUser, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.put('/update-profile', authenticateUser, updateProfile)
router.get("/check", authenticateUser, checkUser)

export default router;