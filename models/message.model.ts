interface ChannelStorage {
    [channel: string]: {
      postedBy: string;
      message: string;
      id: string;
      createdAt: number;
    }[];
  }
  
export const channelStorage: ChannelStorage = {
    "channel-1": [],
    "channel-2": [],
    "channel-3": [],
  };