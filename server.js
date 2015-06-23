var app       =     require("express")();
var express = require("express");
var http      =     require('http').Server(app);
var io        =     require("socket.io")(http);
var osc       =     require('node-osc');
var oscServer = new osc.Server(22223, '127.0.0.1');

// ========== Paginas ========== //
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/led', function(req, res) {
    res.sendFile(__dirname + '/public/led.html');
});
app.get('/luminosidade', function(req, res) {
    res.sendFile(__dirname + '/public/luminosidade.html');
});
app.get('/shast', function(req, res) {
    res.sendFile(__dirname + '/public/shast.html');
});


// ========== OSCSERVER ========== //

/* Runs when a new message arrives */
oscServer.on("message",function(msg, rinfo){
  console.log("Message:");
  console.log(msg[0] + ": " + msg[1]);
  if(msg[0].substring(0, 6) == '/lumin')
    io.emit('expLumin',msg[0], msg[1]);
  else if (msg[0].substring(0,4) == '/led')
    io.emit('estadoLed', msg[0], msg[1]);
  else if (msg[0].substring(0, 6) == '/shast'){
    if(msg[0].substring(6, 12) == '/coord')
      io.emit('novasCoordenadas', msg[0], msg[1], msg[2]);
    else if(msg[0].substring(6, 11) == '/temp')
      io.emit('novaTemperatura', msg[1]);
  }
});

// ========== SOCKET.IO ========== //
/*  This is auto initiated event when Client connects to Your Machine.  */
io.on('connection',function(socket){  
    console.log("A user is connected");
});

http.listen(3000,function(){
    console.log("Listening on 3000");
});