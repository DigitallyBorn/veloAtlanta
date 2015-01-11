var express = require('express');
var mongodb = require("mongodb");
var mongoose = require('mongoose');

var app = module.exports.app = exports.app = express();
app.use(require('connect-livereload')());

// view engine setup
app.use('/api/members', function(req, res) {
  res.send([{ name: 'Ricky Smith' }, { name: 'Chris Smith' }]);
});

app.use('/', express.static(__dirname + '/dist'));

app.listen(3001);
console.log('Listening on port 3001 ...');

module.exports = app;
