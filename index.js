const { Server } = require('socket.io');
const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const expressServer = app.listen(port, () => {
    console.log('Server listening on port', port);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

const io = new Server(expressServer, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? '*' : ["http://localhost:5173"],
    }
});

// Store online users with their socket IDs
const onlineUsers = new Map();

io.on('connection', (socket) => {
    setTimeout(() => {
        console.log('User connected:', socket.id);
    onlineUsers.set(socket.id, socket);
    socket.emit('get-my-socket-id',socket.id)
    // Notify others about the new user
    const currentUsers = Array.from(onlineUsers.keys()).filter(id => id !== socket.id);
    console.log(currentUsers)
    socket.emit('current-users', currentUsers);
    socket.broadcast.emit('user-joined', socket.id);

    // Handle global messages
    socket.on('message', (message) => {
        io.emit('message', `${socket.id.substring(0, 5)}: ${message}`);
    });
    // Handle typing notifications
    socket.on('typing', () => {
        socket.broadcast.emit('typing', `${socket.id.substring(0, 5)} is typing...`);
    });

    // Handle private messages
    socket.on('message-private', ({ message, userId }) => {
        if (onlineUsers.has(userId)) {
            // Send the message to both sender and receiver
            socket.emit('message-private', {message,sender:socket.id,receiver:userId});
            socket.to(userId).emit('message-private', {message,sender:socket.id,receiver:userId});
        } else {
            socket.emit('message', `User ${userId.substring(0, 5)} is not available.`);
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        onlineUsers.delete(socket.id);
        socket.broadcast.emit('user-disconnected', socket.id);
    });
    }, 100);
});