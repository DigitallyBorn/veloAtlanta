var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var mongoose = require('mongoose');

//routes
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.use('/api/members', function(req, res) {
  res.send([{ name: 'Ricky Smith' }, { name: 'Chris Smith' }]);
});

app.use('/', express.static(__dirname + '/dist'));

app.listen(3001);
console.log('Listening on port 3001 ...');

module.exports = app;
