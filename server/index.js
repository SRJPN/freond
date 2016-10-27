var http = require('http');
var app = require('./routes.js');
var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || 'localhost'
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server = http.createServer(app);
console.log("Listening at " + IP_ADDRESS + " on port " + PORT)
server.listen(PORT, IP_ADDRESS);
