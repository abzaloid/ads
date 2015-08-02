Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
 	waitOn: function() { 
 		return [Meteor.subscribe('sell_items'), Meteor.subscribe('images'), Meteor.subscribe('categories')]; 
 	}
});

Router.route('/', {
	name: 'home'
});

Router.route('/search', {
	name: 'adsList'
});

Router.route('/item/:_id', {
	name: 'showItem',
	data: function () {
		return SellItems.findOne(this.params._id);
	},
	onRun: function () {
		// update page views information

		var item_id = this.params._id;

		Meteor.call('sellItemUpdate', item_id, function (error, result) {
			if (error)
				return alert(error.reason);
		});

		this.next();

	}
});

Router.route('/sell', {
	name: 'sell'
});


Router.route('/user', {
	name: 'user'
});

var requireLogin = function () {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {
	only: 'showItem'
});
Router.onBeforeAction(requireLogin, {
	only: 'sell'
});