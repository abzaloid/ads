Template.itemsList.helpers({
  sell_items: function() {
    return SellItems.find();
  },
  categories: function() {
  	return Categories.find();
  }
});
