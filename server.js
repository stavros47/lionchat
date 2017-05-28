var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;
users = [];
connections = [];

server.listen(process.env.PORT || port);
console.log("server Running..");

app.get('/', function(){
  res.sendFile(__dirname + '/index.html');
});
