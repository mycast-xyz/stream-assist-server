import { ChannelManager } from 'common/channel/ChannelManager';
import { LoginParam, NetworkModel } from 'common/network/NetworkModel';

export class VegaNetworkModel implements NetworkModel {
  readonly #channel = new ChannelManager();

  onLogin(param: LoginParam) {
    const channel = this.#channel.createChannel(param.privateKey);
    this.#channel.addChannel(channel);
  }
}
