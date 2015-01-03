var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  	{ title: 'Velo Atlanta Cycling Club',
  	titleShort: 'Velo Atlanta', 
  	article: 'This is the article that i have been trying to get to work for a long time now and i hope that this will finally work.', 
  	membersTitle: 'Loved by our members!',
  	membersSubTitle: 'This is the best riding group that I have ever been a part of.  I would recommend this group to anyone looking to get in shape.',
  	joinTitle: 'Why join velo!',
  	joinSubTitle: 'Read up, on what Velo can do to help you be the best person that you can possibly be'
  });
});

module.exports = router;
