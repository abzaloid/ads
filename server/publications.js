Meteor.publish('categories', function () {
	return Categories.find();
});

Meteor.publish('sell_items', function() {
	return SellItems.find();
});

Meteor.publish("images", function() {
	return Images.find(); 
});