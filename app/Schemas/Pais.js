var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paisSchema = new Schema({
	codigo: { type: String, required: true, unique: true },
	name: { type: String, required: true, unique: true },
	region: { type: Number, ref: 'Region' },
	image: { type: String, required: true, unique: true },
	poblacion: { type: Number },
	pbi: { type: Number },
	fecha_de_relevamiento: { type: Date, required: true },
	created_at: { type: Date, required: true }
});

var Pais = mongoose.model('Pais', paisSchema);

module.exports = Pais;