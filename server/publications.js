Meteor.publish('categories', function () {
	return Categories.find();
});

Meteor.publish('sell_items', function(){
	return SellItems.find();
});