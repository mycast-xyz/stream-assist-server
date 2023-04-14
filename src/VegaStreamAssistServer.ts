import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

export class VegaStreamAssistServer {
  run() {
    const app = express();
    const server = http.createServer(app);

    const io = new Server(server);

    app.get('/', (_, res) => {
      res.send('<h1>Hello world</h1>');
    });

    io.on('connection', (_) => {
      console.log('a user connected');
    });

    server.listen(3000, () => {
      console.log('listening on *:3000');
    });
  }
}
