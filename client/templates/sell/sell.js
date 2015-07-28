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

		var $categories = $("ul.sell-categories").find("li > a.sell-success");
		if ($categories) {
			var categories_values = [];
			var cat_len = $categories.length;
			for (var i = 0; i < cat_len; i++) {
				var category_name = $categories[i].text;
				if (category_name.length > 1) {
					categories_values.push(category_name.slice(0,-1));
				} else {
					alert('Something wrong!!!');
					return false;
				}
			}
			sell_item = _.extend(sell_item, {
				categories: categories_values,
			});
		} else {
			alert("Please choose at least one category");
			return false;
		}

		console.log("Name = " + sell_item.name);
		console.log("Condition = " + sell_item.condition);

		Meteor.call('sellItemInsert', sell_item, function (error, result) {
			if (error)
				return alert(error.reason);
			Router.go('showItem', {_id: result._id});
		});

	}
});