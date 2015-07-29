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

		//	******************************************
		//	Testing if all fields are filled in a form
		//	******************************************


		$(e.target).find('[name=name]').parent().find("small").hide();
		$(e.target).find('[name=price]').parent().find("small").hide();
		$(e.target).find('[name=description]').parent().find("small").hide();
		$(e.target).find('[name=name]').parent().find("small").hide();
		$("ul.sell-categories").parent().find("small").hide();


		var correct_form = true;

		if (sell_item.name.length == 0) {
			$(e.target).find('[name=name]').parent().find("small").show();
			correct_form = false;
		}
		if (sell_item.price.length == 0) {
			$(e.target).find('[name=price]').parent().find("small").show();
			correct_form = false;
		}
		if (sell_item.description.length == 0) {
			$(e.target).find('[name=description]').parent().find("small").show();
			correct_form = false;
		}

		if (sell_item.condition.length == 0) {
			correct_form = false;
		}


		// check if any of categories selected or not
		// if selected, then add it to sell_item {:}
		// if not, report error 
		var $categories = $("ul.sell-categories").find("li > a.sell-success");

		if ($categories && $categories.length > 0) {
			var categories_values = [];
			var cat_len = $categories.length;
			for (var i = 0; i < cat_len; i++) {
				var category_name = $categories[i].text;
				if (category_name.length > 1) {
					categories_values.push(category_name.slice(0, -1));
				} else {
					alert('Something wrong!!!');
					return false;
				}
			}
			sell_item = _.extend(sell_item, {
				categories: categories_values,
			});
		} else {
			$("ul.sell-categories").parent().find("small").show();
			correct_form = false;
		}

		if (! correct_form) {
			alert("Please fill all fields");
			return false;
		}


		//	***************************************************
		//	call Meteor Server Side for Inserting new Sell Item
		//  ***************************************************

		Meteor.call('sellItemInsert', sell_item, function (error, result) {
			if (error)
				return alert(error.reason);
			Router.go('showItem', {_id: result._id});
		});

	}
});