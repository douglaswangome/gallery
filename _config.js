var config = {}

// Update to have your correct username and password
// config.mongoURI = {
// 	production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
// 	development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
// 	test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
// }

// Updated configuration for MongoDB connection
config.mongoURI = {
	production: "mongodb+srv://admin:12345@main.c79awyw.mongodb.net/?retryWrites=true&w=majority&appName=main",
	development: "mongodb+srv://admin:12345@main.c79awyw.mongodb.net/?retryWrites=true&w=majority&appName=main",
	test: "mongodb+srv://admin:12345@main.c79awyw.mongodb.net/?retryWrites=true&w=majority&appName=main",
}

module.exports = config;
