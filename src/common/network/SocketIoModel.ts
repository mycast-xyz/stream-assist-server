import express from 'express';
import http from 'http';
import socketio, { Socket } from 'socket.io';

import { SocketIoModelTemplate } from './SocketModelTemplate';

export class SocketIoModel extends SocketIoModelTemplate {
  readonly #sockets: Socket[] = [];

  constructor() {
    super();

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

      socket.on('login', (args) => {
        console.log('login', args);
      });

      socket.on('message', (args) => {
        console.log(args);
      });

      this.notifyLogin({ type: 'channel', privateKey: '1234' });
    });

    server.listen(3000, () => {
      console.log('listening on *:3000');
    });
  }
}
