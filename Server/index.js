import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 3000;

io.on('connection', (socket) => {
    console.log('New connection');
});

app.listen(port, () => {
    console.log('Hey, the server of ws is running in port ' + port);
});
