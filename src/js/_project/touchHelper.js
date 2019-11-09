const touchHelper = {
	init: function() {
		if (('ontouchstart' in window || navigator.msMaxTouchPoints > 0) && window.matchMedia('screen and (max-width: 1024px)').matches || 'ontouchstart' in window && navigator.appVersion.indexOf('Mac')!== -1) {
			$('html').addClass('touch');
		} else {
			$('html').addClass('no-touch');
		}
	},
};

export default touchHelper;
