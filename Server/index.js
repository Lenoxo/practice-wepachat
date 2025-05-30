import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});
const port = 3000;

io.on('connection', (socket) => {
    console.log('New connection');

    socket.on('chat message', (msg) => {
        console.info('New message: ', msg);
        io.emit('chat message', msg);
    });
});

io.listen(port);
