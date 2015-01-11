var express = require('express');
var mongodb = require("mongodb");
var mongoose = require('mongoose');

var app = module.exports.app = exports.app = express();
app.use(require('connect-livereload')());

// view engine setup
app.use('/api/members', function(req, res) {
  res.send([{ name: 'Ricky Smith' }, { name: 'Chris Smith' }]);
});

if (process.env.NODE_ENV === 'development') {
  app.use('/', express.static(__dirname + '/debug'));
} else if (process.env.NODE_ENV === 'development') {
  app.use('/', express.static(__dirname + '/dist'));
}
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' . port);

module.exports = app;
