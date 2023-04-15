import { SocketIoModel } from './common/network/SocketIoModel';

export class VegaStreamAssistServer {
  run() {
    const socket = new SocketIoModel();
    socket.onLogin((param) => {
      console.log(param);
    });
  }
}
