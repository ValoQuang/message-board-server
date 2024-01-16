import express from "express";

const router = express.Router();

const messageController = require("../controller/message.controller");

//create message
router.post("/channel", messageController.signIn);

router.get("/channels", messageController.getUser);
router.get("/logout", messageController.logOut)

module.exports = router;