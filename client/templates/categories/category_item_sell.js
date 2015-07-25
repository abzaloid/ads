Template.categoryItemSell.events({
	'click a': function (event, template) {
		var $cat = template.$("a");
		if ($cat.find("span").length > 0) {
			$cat.find("span").remove();
			$cat.removeClass("sell-success");
		} else {
			$cat.append('<span class="pull-right">&#10004;</span>');
			$cat.addClass("sell-success");
		}
	}
});
