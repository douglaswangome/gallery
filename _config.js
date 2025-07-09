var config = {}

// Update to have your correct username and password
config.mongoURI = {
  production: 'mongodb+srv://douglaswangome:<db_password>@gallery.1mvkkit.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
  development: 'mongodb+srv://douglaswangome:<db_password>@gallery.1mvkkit.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
  test: 'mongodb+srv://douglaswangome:<db_password>@gallery.1mvkkit.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
}
module.exports = config;
