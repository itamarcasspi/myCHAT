import express from "express";
import protectRoute from "../middleware/protect.route.js";
import { sendMessage,getMessages } from "../controllers/message.controllers.js";

const router = express.Router();

router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessage);

export default router;