const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./util/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./util/users');

const app = express();
const server = http.createServer(app);

const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:4200',credentials: true
    },transports: [ 'websocket', 'flashsocket', 'polling']
  } );
 
const { connect } = require('http2');
app.use(cors());

const botName = 'System Bot';

app.use(express.static(path.join(__dirname,'public')));

//run when client connect
io.on('connection', socket =>{ 
    
    io.emit("documents", Object.keys(documents));

    console.log(`Socket ${socket.id} has connected`);

    socket.on('joinRoom',({username,room}) =>{

        const user = userJoin(socket.id, username, room);

        socket.join(user.room);
        //Welcome Current user
        socket.emit('message',formatMessage(botName,'welcome to chatcord!'));

        //Brodcast when a user connects
        socket.broadcast.to(user.room).emit('message',formatMessage(botName,`${user.username} has joined the chat`));

        //send users
        io.to(user.room).emit('roomUsers',{
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

   
    socket.on('new-message', (message) => {
        io.emit(message);
        console.log(message);
      });

   

    // Listen to chatMessage
    socket.on('chatMessage',(msg) => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message',formatMessage(user.username,msg));
    });

     //runs when client disconnects
     socket.on('disconnect',() => {
        const user = userLeave(socket.id);

        if(user) {
            io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left the chat`));

            //send users
        io.to(user.room).emit('roomUsers',{
            room: user.room,
            users: getRoomUsers(user.room)
        });
        }

        
    }); 

    
}); 

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));