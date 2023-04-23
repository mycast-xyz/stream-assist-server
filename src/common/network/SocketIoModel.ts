import express from 'express';
import http from 'http';
import socketio, { Socket } from 'socket.io';

import { NetworkModel } from './NetworkModel';

export class SocketIoModel {
  readonly #sockets: Socket[] = [];
  readonly #network: NetworkModel;

  constructor(network: NetworkModel) {
    this.#network = network;

    const app = express();
    const server = http.createServer(app);
    const io = socketio(server);

    app.get('/', (_, res) => {
      res.send('<h1>Hello world</h1>');
    });

    io.on('connection', (socket) => {
      this.#sockets.push(socket);

      this.#sockets.forEach((s) => s.emit('login', `${socket.id} logged in`));

      console.log('a user connected');

      socket.emit('connect', { msg: 'hello' });

      socket.on('message', (msg: SocketMessage) => {
        switch (msg.type) {
          case 'login':
            this.#network.onLogin({
              type: msg.message.type,
              privateKey: msg.message.privateKey,
            });
            break;
          default:
        }
        console.log(msg);
      });
    });

    server.listen(3000, () => {
      console.log('listening on *:3000');
    });
  }
}

type SocketMessage = LoginMessage;

type LoginMessage = {
  type: 'login';
  message: { type: 'channel' | 'user'; privateKey: string };
};
