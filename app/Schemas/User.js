var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	googleId: { type: Number, required: true },
	created_at: { type: Date, required: true }
});

var User = mongoose.model('User', userSchema);

module.exports = User;