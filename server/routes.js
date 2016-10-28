const express = require('express');
const fs = require('fs');
var urlParser = require('url-parse');

var app = express();

app.use(function(req, res, next) {
    console.log(new Date().toTimeString(), req.method, req.url);
    next();
});

app.use(express.static('./public'));

app.get('/getTicket?', function(req, res, next) {
    var urlObj = urlParser.qs.parse(req.url);
    var file = fs.readFileSync('./public/ticket.html', 'utf8');
    file = file.replace('_to_', urlObj.to)
    file = file.replace('_from_', urlObj.from)
    res.end(file)
});

module.exports = app;
