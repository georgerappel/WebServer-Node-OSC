var osc = require('node-osc');
var client = new osc.Client('127.0.0.1', 22223);

// Random function will generate a number between 0 and 1,
// So we get the number, multiply by the maximum and use "floor"
// function to get an integer.
client.send('/led/position', Math.floor((Math.random() * 2)));
client.send('/lumin/luminosidade', Math.floor((Math.random() * 100) + 500));
client.send('/shast/coordenadas', Math.floor((Math.random() * 293)), Math.floor((Math.random() * 293)));
client.send('/shast/coordenadas', Math.floor((Math.random() * 293)), Math.floor((Math.random() * 293)));
client.send('/shast/coordenadas', Math.floor((Math.random() * 293)), Math.floor((Math.random() * 293)));
client.send('/shast/temp', Math.floor((Math.random() * 20)) + 10);
