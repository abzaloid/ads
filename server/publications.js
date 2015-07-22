Meteor.publish('categories', function () {
	return Categories.find();
});

Meteor.publish('items', function(){
	return Items.find();
});