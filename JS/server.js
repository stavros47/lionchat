var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;
users = [];
connections = [];

server.listen(port);
console.log("Server Running..");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
