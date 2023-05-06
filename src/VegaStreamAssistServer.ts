import { Config } from './app/config/Config';
import { VegaNetworkModel } from './app/VegaNetworkModel';
import { SocketIoModel } from './common/network/SocketIoModel';

export class VegaStreamAssistServer {
  run() {
    const network = new VegaNetworkModel();
    new SocketIoModel(network, Config.SOCKET_PORT);
  }
}
