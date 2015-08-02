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
			owner: user.profile.firstname + " " + user.profile.lastname,
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

		var sell_item = SellItems.findOne({_id: itemId});

		if (!sell_item) {
			Router.go("notFound");
			return false; 
		}

		var sellItemId = SellItems.update({_id: itemId}, {$inc: {views : 1}});
		return true;
	}
});