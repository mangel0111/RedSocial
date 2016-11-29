var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user) {
		res.render('index');
	} else {
		res.redirect('/login');
	}
});

router.get('/region/:id', function(req, res, next) {
	if (req.user) {
		res.render('index');
	} else {
		res.redirect('/login');
	}
});

module.exports = router;
