Meteor.publish('ads', function() {
	return Ads.find();
});
