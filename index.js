var $ = require('jquery-browserify');
(function ($) {
	$.fn.stGetJSON = function(instance) {
		return SirTrevor.getInstance(instance).store("read");
	}
	$.fn.stReplaceJSON = function(json) {
		// this.text(json);
		// Currently, this is commented out due to re-initialization issues on Sir Trevor.
		// This is an in-progress effort between @ninjabiscuit (Sir Trevor expert) and me (@nhubbard) on GitHub. Follow our progress with madebymany/sir-trevor-js#255.
	}
}( jQuery ));