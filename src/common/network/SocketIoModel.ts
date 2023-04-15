import express from 'express';
import http from 'http';
import socketio from 'socket.io';

import { SocketIoModelTemplate } from './SocketModelTemplate';

export class SocketIoModel extends SocketIoModelTemplate {
  constructor() {
    super();

    const app = express();
    const server = http.createServer(app);
    const io = socketio();

    app.get('/', (_, res) => {
      res.send('<h1>Hello world</h1>');
    });

    io.on('connection', (_) => {
      console.log('a user connected');

      this.notifyLogin({ type: 'channel', privateKey: '1234' });
    });

    server.listen(3000, () => {
      console.log('listening on *:3000');
    });
  }
}
