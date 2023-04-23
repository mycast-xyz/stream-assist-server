import express from 'express';
import http from 'http';
import socketio, { Socket } from 'socket.io';

import {
  DonationRegisterParam,
  LoginParam,
  NetworkModel,
} from './NetworkModel';

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
            this.#network.onLogin(msg.message);
            break;
          case 'donation-register':
            this.#network.onDonationRegister(msg.message);
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

type SocketMessage = LoginSocketMessage | DonationRegisterMessage;

type Template<T, M> = { type: T; message: M };

type LoginSocketMessage = Template<'login', LoginParam>;

type DonationRegisterMessage = Template<
  'donation-register',
  DonationRegisterParam
>;
