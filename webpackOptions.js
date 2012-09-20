var path = require("path");
module.exports = function(options) {
	options.resolve.alias.bootstrap = __dirname;
}