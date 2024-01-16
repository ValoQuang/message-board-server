import { Request, Response } from "express";

interface ChannelStorage {
    [channel: string]: { text: string }[];
  }

const channelStorage: ChannelStorage = {
  channel1: [],
  channel2: [],
  channel3: [],
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const channel = req.params.channel;
    const messageText = req.body.message;

    if (!channelStorage[channel]) {
      channelStorage[channel] = [];
    }
    channelStorage[channel].push({ text: messageText });

    res.send("Message added successfully");
    return res
      .status(201)
      .send("Message added successfully")
      .json({ code: res.statusCode, message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating message", error);
    res.status(500).json({
      code: res.statusCode,
      error: "An error occurred while create message",
    });
  }
};
