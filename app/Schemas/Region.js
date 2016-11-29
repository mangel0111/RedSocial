var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var regionSchema = new Schema({
	name: { type: String, required: true, unique: true },
	created_at: { type: Date, required: true }
});

var Region = mongoose.model('Region', regionSchema);

module.exports = Region;