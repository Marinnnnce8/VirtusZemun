const equalHeights = {
	$mainParentElement: $('.js-equal-heights-main'),
	mainItemsClass: $('.js-equal-heights-item-main'),
	$parentElement: $('.js-equal-heights'),
	itemsClass: $('.js-equal-heights-item'),

	init: function() {
		if (this.itemslass || this.mainItemsClass) {
			$(document).ready(function() {
				equalHeights.setHeights(equalHeights.$parentElement, equalHeights.itemsClass);
				equalHeights.setHeights(equalHeights.$mainParentElement, equalHeights.mainItemsClass);
			});
		}
	},

	setHeights: function(obj, item) {
		let objHeight = 0;
		obj.each(function() {
			if (
				$(this)
					.find(item)
					.outerHeight() > objHeight
			) {
				objHeight = $(this)
					.find(item)
					.outerHeight();
			}
		});
		item.css('height', objHeight);
	}
};

export default equalHeights;
