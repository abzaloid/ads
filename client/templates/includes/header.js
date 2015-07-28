Template.header.helpers({
  categories: function() {
    return Categories.find();
  }
});

Template.header.events({
	'click #sell': function (event, template) {
		$("#sell").css("text-decoration", "none");
		$("#sell").css("color", "white");
		$("#buy").css("color", "#aaa");
		$("#buy").css("font-size", "0.8em");
		$("#sell").css("font-size", "1.2em");
	},
	'click #buy': function (event, template) {
		$("#buy").css("text-decoration", "none");		
		$("#buy").css("color", "white");
		$("#sell").css("color", "#aaa");
		$("#buy").css("font-size", "1.2em");
		$("#sell").css("font-size", "0.8em");
	},
});