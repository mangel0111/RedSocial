var Region = require('../../app/Back/Schemas/Region');
var errorHandler = function (msg, res) {
	res.status(500).json({message: msg});
};

module.exports = function (router) {

	router.get('/region', function(req, res, next) {
		Region.find(function (err, regions) {
			if (err) res.send(500);
			res.json(regions);
		});
	});

	router.get('/region/:id', function(req, res, next) {
		Region.findById(req.params.id, function (err, region) {
			if (err) res.send(500);
			res.json(region);
		});
	});

	router.post('/region', function(req, res, next) {
		if (typeof(req.body.name) !== "string") return errorHandler("Name is required", res);
		if (req.body.name.length > 49) return errorHandler("The name is too long", res);

		var region = new Region({
			'name': req.body.name,
			'created_at': new Date()
		});

		region.save(function (err) {
			if (err) return errorHandler("This already exists", res);
			res.send(200);
		});
	});

	router.put('/region/:id', function(req, res, next) {
		if (typeof(req.body.name) !== "string") return errorHandler("Name is required", res);
		if (req.body.name.length > 49) return errorHandler("The name is too long", res);

		Region.findById(req.params.id, function (err, region) {
			if (err) {
				res.status(404).json({message: "Region not found"});
				return;
			}

			region.name = req.body.name;
			
			region.save(function (err) {
				if (err) return errorHandler("This already exists", res);
				res.send(200);
			});
		});
	});

	router.delete('/region/:id', function(req, res) {
		Region.remove({
			_id: req.params.id
		}, function(err, bear) {
			if (err) return errorHandler("Error on remove", res);
			res.send(200);
		});
	});

	return router;
};