var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  	{ title: 'Velo Atlanta Cycling Club',
  	titleShort: 'Velo Atlanta', 
  	article: 'This is the article that i have been trying to get to work for a long time now and i hope that this will finally work.' 
  });
});

module.exports = router;
