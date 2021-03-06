var express = require('express');
var mongodb = require("mongodb");
var mongoose = require('mongoose');

var app = module.exports.app = exports.app = express();

// view engine setup
app.use('/api/members', function(req, res) {
  res.send([{ name: 'Ricky Smith' }, { name: 'Chris Smith' }]);
});

if (process.env.NODE_ENV === 'development') {
  console.log('Starting in development mode ...');
  app.use(require('connect-livereload')());
  app.use('/', express.static(__dirname + '/debug'));
} else if (process.env.NODE_ENV === 'production') {
  console.log('Starting in production mode ...');
  app.use('/', express.static(__dirname + '/dist'));
}
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' . port);

module.exports = app;
