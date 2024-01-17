import express from "express";
const router = express.Router();
import * as messageController from "../controller/message.controller";

// create message
router.post("/:channel", messageController.createMessage);
router.get("/channels", messageController.getAllChannels);
router.get("/message/:channel", messageController.getMessageFromChannel);

export default router;
