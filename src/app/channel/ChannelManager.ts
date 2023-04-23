import { Channel } from './Channel';

export class ChannelManager {
  #channels: Channel[] = [];

  addChannel(channel: Channel) {
    this.#channels = [...this.#channels, channel];
  }

  removeChannel(privateKey: string) {
    this.#channels = this.#channels.filter((c) => c.privateKey !== privateKey);
  }

  createChannel(privateKey: string): Channel {
    return {
      privateKey: privateKey,
    };
  }
}
