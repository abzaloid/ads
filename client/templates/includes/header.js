Template.header.helpers({
  categories: function() {
    return Categories.find();
  },
  user_id: function () {
  	return Meteor.userId();
  }
});

Template.header.events({
	'keyup #search-input': function (event) {
		var search_text = $("#search-input").val();

		$("#hello").text(search_text);
	},
  
});