var osc = require('node-osc');
var client = new osc.Client('127.0.0.1', 22223);
//client.send('/lumin/luminosidade', Math.floor((Math.random() * 100) + 500));
//client.send('/lumin/temperatura', 21);
client.send('/shast/coordenadas', Math.floor((Math.random() * 293)), Math.floor((Math.random() * 293)));
client.send('/shast/coordenadas', Math.floor((Math.random() * 293)), Math.floor((Math.random() * 293)));
client.send('/shast/coordenadas', Math.floor((Math.random() * 293)), Math.floor((Math.random() * 293)));
client.send('/shast/temp', Math.floor((Math.random() * 20)) + 10);