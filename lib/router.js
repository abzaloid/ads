Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
 	waitOn: function() { 
 		return [Meteor.subscribe('sell_items'), Meteor.subscribe('categories')]; 
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
	}
});

Router.route('/sell', {
	name: 'sell'
});

Router.route('/ask', {
	name: 'ask'
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