var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'blog' });
});

router.get('/upcoming', function(req, res, next) {
  res.render('upcoming', { title: 'upcoming' });
});

module.exports = router;