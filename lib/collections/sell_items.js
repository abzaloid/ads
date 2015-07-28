SellItems = new Mongo.Collection('sell_items');

Meteor.methods({
	sellItemInsert: function (sellItemAttributes) {
		check(this.userId, String);
		check(sellItemAttributes, {
			name: String,
			condition: String,
			price: int,
			description: String, 
		});
		var user = Meteor.user();

		var sell_item = _.extend(sellItemAttributes, {
			userId: user._id,
			author: user['first-name'] + " " + user['second-name'],
			added_date: new Date(),
			updated_date: new Date(),
		});

		var sellItemId = SellItems.insert(sell_item);
		
		return {
			_id: sellItemId
		}

	}
});