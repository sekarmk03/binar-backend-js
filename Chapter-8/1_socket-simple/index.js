const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(3000, () => console.log('listeningon port 3000'));

// add endpoint
app.use('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// socket
io.on('connect', (socket) => {
    console.log('user conected');

    // listener
    socket.on('chat', (data) => {
        // emitter
        io.sockets.emit('chat', data);
    });
});