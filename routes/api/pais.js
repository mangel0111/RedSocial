var Pais = require('../../app/Back/Schemas/Pais');
var cloudinary = require('../../app/Back/Storage/cloudinary');
var errorHandler = function (msg, res) {
	res.status(500).json({message: msg});
};
/*
cloudinary.uploader.upload("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREJJqgEk1n60N8K2X-0uwfr_p1LuS04Vfn-uWN5HTMJ_UH_sX9LP5V5h4", function(result) { 
  console.log(result) 
});
*/

module.exports = function (router) {

	router.get('/pais', function(req, res, next) {
		Pais.find(function (err, paises) {
			if (err) res.send(500);
			res.json(paises);
		});
	});

	router.get('/pais/:id', function(req, res, next) {
		Pais.findById(req.params.id, function (err, pais) {
			if (err) res.send(500);
			res.json(pais);
		});
	});

	router.post('/pais', function(req, res, next) {
		if (typeof(req.body.name) !== "string") return errorHandler("Name is required", res);
		if (typeof(req.body.codigo) !== "string") return errorHandler("Codigo is required", res);
		if (req.body.name.length > 49) return errorHandler("The name param is too long", res);
		if (req.body.codigo.length > 1) return errorHandler("The codigo param is too long", res);

		
		var pais = new Pais({
			'name': req.body.name,
			'created_at': new Date()
		});

		pais.save(function (err) {
			if (err) return errorHandler("This already exists", res);
			res.send(200);
		});
	});

	router.put('/pais/:id', function(req, res, next) {
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

	router.delete('/pais/:id', function(req, res) {
		Pais.remove({
			_id: req.params.id
		}, function(err, bear) {
			if (err) return errorHandler("Error on remove", res);
			res.send(200);
		});
	});

	return router;
};