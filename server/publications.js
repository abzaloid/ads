Meteor.publish('ads', function() {
	return Ads.find();
});

Meteor.publish('categories', function () {
	return Categories.find();
});

Meteor.publish('items', function(){
	return Items.find();
});