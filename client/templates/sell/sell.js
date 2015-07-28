Template.sell.helpers({
	categories: function () {
		return Categories.find();
	}
});

Template.sell.events({
	'submit form': function (e) {
		e.preventDefault();

		var sell_item = {
			name: $(e.target).find('[name=name]').val(),
			condition: $(e.target).find('[name=condition]').val(),
			price: $(e.target).find('[name=price]').val(),
			description: $(e.target).find('[name=description]').val(),
		};

		Meteor.call('sellItemInsert', sell, function (error, results) {
			if (error)
				return alert(error.reason);
			Router.go('showItem', {_id: result._id});
		});

		Router.go('sellPage', sell_item);

	}
});