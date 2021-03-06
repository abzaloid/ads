SellItems = new Mongo.Collection('sell_items');

Meteor.methods({
	sellItemInsert: function (sellItemAttributes) {
		// check(this.userId, String);
		// check(sellItemAttributes, {
		// 	name: String,
		// 	condition: String,
		// 	price: String,
		// 	description: String, 
		// 	categories: Array,
		// 	url: String,
		// })

		var user = Meteor.user();

		var sell_item = _.extend(sellItemAttributes, {
			userId: user._id,
			owner: user.emails[0].address,
			added_date: new Date(),
			updated_date: new Date(),
		});

		var sellItemId = SellItems.insert(sell_item);
		
		return {
			_id: sellItemId
		}

	},
	sellItemUpdate: function (itemId) {
		var user = Meteor.user();

		var sellItemId = SellItems.update({_id: itemId}, {$inc: {views : 1}});

		return sellItemId;
	}
});
