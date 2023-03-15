const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat-message', (message) => {
    console.log('Message received: ' + message);
    io.emit('chat-message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});