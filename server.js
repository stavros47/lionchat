
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;
users = [];
connections = [];

server.listen(port);
console.log("Server Running..");


app.use(express.static(__dirname + '/'));



io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log("Connected! %s sockets connected", connections.length);

  //Disconnect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected! %s sockets connected", connections.length);
  });


});
