const express = require('express');

var app = express();

app.use(function(req, res, next) {
    console.log(new Date().toTimeString(), req.method, req.url);
    next();
});

app.use(express.static('./public'));

module.exports = app;
