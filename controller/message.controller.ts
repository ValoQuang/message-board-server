import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

interface ChannelStorage {
  [channel: string]: {
    postedBy: string;
    message: string;
    id: string;
    createdAt: number;
  }[];
}

const channelStorage: ChannelStorage = {
  "channel-1": [],
  "channel-2": [],
  "channel-3": [],
};

export const getAllChannels = async (req: Request, res: Response) => {
  try {
    const channelList = Object.keys(channelStorage);
    return res.status(200).json({ code: res.statusCode, payload: channelList });
  } catch (error) {
    res.status(500).json({
      code: res.statusCode,
      error: "An error occurred while getting channels",
    });
  }
};

export const getMessageFromChannel = async (req: Request, res: Response) => {
  try {
    const channel = req.params.channel;
    if (!channelStorage[channel]) {
      channelStorage[channel] = [];
      return res.status(404).json({
        code: res.statusCode,
        payload: "Channel not found, check your server",
      });
    } else {
      const response = Object.values(channelStorage[channel]);
      return res.status(200).json({ code: res.statusCode, payload: response });
    }
  } catch (error) {
    res.status(500).json({
      code: res.statusCode,
      error: `An error occured while retrieving (GET) message for channel ${req.params.channel}`,
    });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const channel = req.params.channel;
    const messageText = req.body;
    channelStorage[channel].unshift({
      id: uuidv4(),
      createdAt: Date.now(),
      message: messageText.note,
      postedBy: "",
    });
    return res.status(201).json({
      code: res.statusCode,
      message: messageText.note,
    });
  } catch (error) {
    res.status(500).json({
      code: res.statusCode,
      error: `An error occured while creating (POST) message for channel ${req.params.channel}`,
    });
  }
};
