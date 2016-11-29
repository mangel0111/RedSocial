var cloudinary = require('cloudinary');
var config = require('./../../../config');
var url = require('url');

cloudinary.config({ 
  cloud_name: url.parse(config.cloudinary_uri).host, 
  api_key: url.parse(config.cloudinary_uri).auth.split(":")[0], 
  api_secret: url.parse(config.cloudinary_uri).auth.split(":")[1] 
});

module.exports = cloudinary; 