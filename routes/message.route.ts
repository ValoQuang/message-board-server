import express from "express";

const router = express.Router();

const messageController = require("../controller/message.controller");

//create message
router.post("/:channel", messageController.createMessage);
router.get("/channels", messageController.getAllChannels);
router.get("/message/:channel", messageController.getMessageFromChannel);

module.exports = router;
