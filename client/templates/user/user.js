Template.user.helpers({
	sell_items: function() {
    	return SellItems.find({userId: this._id});
  	},
  	admin: function () {
  		return true;
  	}
});