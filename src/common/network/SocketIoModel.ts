import express from 'express';
import * as bodyParser from 'body-parser';
import http from 'http';
import socketio, { Socket } from 'socket.io';

import { DonationUserSetting } from '../repository/router/DonationUserSettingRouter';
import { VideoSearchRouter } from '../repository/router/VideoSearchRouter';

import {
  DonationRegisterParam,
  LoginParam,
  NetworkModel,
} from './NetworkModel';

export class SocketIoModel {
  readonly #sockets: Socket[] = [];
  readonly #network: NetworkModel;

  constructor(network: NetworkModel, port: number) {
    this.#network = network;

    const app = express();
    const server = http.createServer(app);
    const io = socketio(server);

    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));

    app.get('/', (_, res) => {
      res.send('<h1>Hello world</h1>');
    });

    app.use('/setting', new DonationUserSetting().getRouter());
    app.use('/video', new VideoSearchRouter().getRouter());

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

    server.listen(port, () => {
      console.log(`listening on *:${port}`);
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
