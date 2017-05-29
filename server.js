
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;
users = [];
connections = [];

server.listen(port, "0.0.0.0");
console.log("Server Running..");
console.log("%s socket(s) connected!", connections.length);

app.use(express.static(__dirname + '/'));



io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log("Connected! %s socket(s) connected", connections.length);

  //Disconnect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected! %s socket(s) connected", connections.length);
  });
  //Send message
  socket.on('send message', function(data){
    io.sockets.emit('new message', {msg: data});
  });

});
