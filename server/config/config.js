var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

//TODO add origins to config ;)
//Config Vars loaded from Process ENV. These files will load in from .env file.
module.exports = {
    port: process.env.PORT || 8080,
    rootPath: rootPath
};
