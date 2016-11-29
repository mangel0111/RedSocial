var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('../config');
var host = (config.env !== 'dev') ? "https://red-social.herokuapp.com" : "http://localhost:6969";

var User = require('../app/Schemas/User');

passport.use(new GoogleStrategy({
	clientID: config.googleClientId,
	clientSecret: config.googleClientSecret,
	callbackURL: host + "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
	return done(null, profile);
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

router.get('/auth/google', passport.authenticate('google', { scope: 'email' }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/fail' }), function(req, res) {
	var googleId = req.user.id;
	User.find({ 'googleId': googleId }, function(err, user) {
		var newUser;
		if (err) return res.status(500).json({message: "Authentication error"});
		if (!user.length) {
			newUser = new User({
				'googleId': googleId,
				'created_at': new Date()
			});
			newUser.save(function(err) {
				if (err) throw err;
				res.redirect('/app/');
				console.log('User saved successfully!');
			});
		} else {
			res.redirect('/app/');
		}
	});
});

router.get('/fail', function(req, res){
	res.send("caca");
});

router.get('/', function(req, res){
	if (req.user) {
		res.redirect('/app');
	} else {
		res.redirect('/login');
	}
});

router.get('/login', function(req, res){
	res.render('login');
});

router.get('/logout', function(req, res){
	req.session.destroy(function (err) {
		res.redirect('/');
	});
});

module.exports = router;
