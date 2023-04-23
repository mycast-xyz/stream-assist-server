import { VegaNetworkModel } from './app/VegaNetworkModel';
import { SocketIoModel } from './common/network/SocketIoModel';

export class VegaStreamAssistServer {
  run() {
    const network = new VegaNetworkModel();
    //const socket = new SocketIoModel(network);
    new SocketIoModel(network);
  }
}
