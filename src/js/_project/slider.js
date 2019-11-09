const slider = {
	bannerSlider: {
		$selector: $('.js-slider'),
		slidesToShow: 1,
		slidesToShowTablet: 1,
		slidesToShowMobile: 1
	},

	init: function() {
		this.initSlider(this.bannerSlider);
	},

	initSlider: function(obj) {
		obj.$selector.slick({
			slidesToShow: obj.slidesToShow,
			slidesToScroll: 1,
			prevArrow: obj.$prevArrow,
			nextArrow: obj.$nextArrow,
			adaptiveHeight: false,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: false
		});
	}
};

export default slider;
