import { Request, Response } from "express";

interface ChannelStorage {
  [channel: string]: { id: number; text: string }[];
}

const channelStorage: ChannelStorage = {
  "channel-1": [{ id: Date.now(), text: "test text from channel 1" }],
  "channel-2": [{ id: Date.now(), text: "test text from channel 2" }],
  "channel-3": [{ id: Date.now(), text: "test text from channel 3" }],
};

export const getAllChannels = async (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json({ code: res.statusCode, payload: channelStorage });
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
    channelStorage[channel].push({ id: Date.now(), text: messageText });

    return res.status(201).json({
      code: res.statusCode,
      message: "message registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      code: res.statusCode,
      error: `An error occured while creating (POST) message for channel ${req.params.channel}`,
    });
  }
};
