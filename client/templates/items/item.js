Template.Item.helpers({
	strike: function () {
		if (this.views % 2 == 0)
			return 1;
		return null;
	}
});