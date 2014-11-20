var $ = require('jquery-browserify');
(function ($) {
	$.fn.stGetJSON = function() {
		this.text();
		return this;
	}
	$.fn.stReplaceJSON = function(json) {
		this.text(json);
	}
}( jQuery ));