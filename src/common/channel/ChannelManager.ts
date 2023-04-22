import { Channel } from './Channel';

export class ChannelManager {
  #channels: Channel[] = [];

  addChannel(channel: Channel) {
    this.#channels = [...this.#channels, channel];
  }

  removeChannel(channelHash: string) {
    this.#channels = this.#channels.filter((c) => c.hash !== channelHash);
  }
}
