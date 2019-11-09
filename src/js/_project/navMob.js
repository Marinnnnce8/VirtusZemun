const navMob = {
	$navBtn: $('.js-hamburger-btn'),
	$header: $('.header'),
	$nav: $('.nav'),
	btnActive: 'hamburger-btn--active',

	init: function() {
		this.toggleNavMob(this.$navBtn, this.$nav);
		this.closeNavMob(this.$header, this.$navBtn);
	},

	toggleNavMob: function(obj, nav) {
		obj.click(function() {
			nav.slideToggle();
			$(this).toggleClass(navMob.btnActive);
		});
	},

	closeNavMob: function(obj, btn) {
		$(document).mouseup(function(e) {
			if (window.matchMedia('(max-width: 769px)').matches && !obj.is(e.target) && obj.has(e.target).length === 0) {
				navMob.$nav.slideUp();
				btn.removeClass(navMob.btnActive);
			}
		});
	}
};

export default navMob;
