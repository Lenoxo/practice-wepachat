// import WebSocket from "ws";

// const ws = new WebSocket('ws://localhost:8080')

// ws.on('open', () => {
//     ws.send("Server for websockets open")
// })

// ws.on('message', (data) => {
//     console.log('Received: %s ', data)
// })

// ws.on('error', console.error)

import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('The server is ready for your messages >:)');
});