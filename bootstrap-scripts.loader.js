var scripts = [
	"affix",
	"alert",
	"button",
	"carousel",
	"collapse",
	"dropdown",
	"modal",
	"tooltip",
	"popover",
	"scrollspy",
	"tab",
	"transition",
	"typeahead"
];

module.exports = function(configSource) {
	this.cacheable();
	var config = this.exec(configSource, this.filenames[0]);
	return scripts.filter(function(script) {
		return config.scripts[script];
	}).map(function(script) {
		return "require(" + JSON.stringify("bootstrap/" + script) + ");";
	}).join("\n");
}