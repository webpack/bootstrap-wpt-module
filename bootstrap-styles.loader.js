var styles = [
	"mixins",
	"scaffolding",
	"grid",
	"layouts",
	"type",
	"code",
	"forms",
	"tables",
	"sprites",
	"dropdowns",
	"wells",
	"component-animations",
	"close",
	"buttons",
	"button-groups",
	"alerts",
	"navs",
	"navbar",
	"breadcrumbs",
	"pagination",
	"pager",
	"modals",
	"tooltip",
	"popovers",
	"thumbnails",
	"labels-badges",
	"progress-bars",
	"accordion",
	"carousel",
	"hero-unit",
	"responsive-utilities",
	"responsive-767px-max",
	"responsive-768px-979px",
	"responsive-1200px-min",
	"responsive-navbar",
	"utilities"
];

module.exports = function(configSource) {
	this.cacheable();
	var config = this.exec(configSource, this.filenames[0]);
	var start = config.styles.reset ? "@import \"~bootstrap/less/reset.less\";\n" : "";
	start += "@import \"~bootstrap/less/variables.less\";\n";
	start += '@iconSpritePath:          "~bootstrap/img/glyphicons-halflings.png";\n';
	start += '@iconWhiteSpritePath:     "~bootstrap/img/glyphicons-halflings-white.png";\n';
	start += "@import \"bootstrap.config.less\";\n";
	return start + styles.filter(function(style) {
		return config.styles[style];
	}).map(function(style) {
		return "@import \"~bootstrap/less/" + style + ".less\";";
	}).join("\n");
}