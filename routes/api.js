var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send("work");
});

//router = require('./api/region')(router);
//router = require('./api/pais')(router);

module.exports = router;