Template.adsList.helpers({
  items: function() {
    return Items.find();
  },
  categories: function() {
  	return Categories.find();
  }
});
