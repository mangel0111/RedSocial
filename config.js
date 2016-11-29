var env_variables = {
	googleClientId: process.env.GOOGLE_CLIENT_ID,
	env: process.env.ENVIROMENT,
	mongo_uri: process.env.MONGODB_URI,
	cloudinary_uri: process.env.CLOUDINARY_URL,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
};

module.exports = env_variables;