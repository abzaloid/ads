Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
 	waitOn: function() { 
 		return [Meteor.subscribe('items'), Meteor.subscribe('categories')]; 
 	}
});

Router.route('/', {
	name: 'home'
});

Router.route('/search', {
	name: 'adsList'
});

Router.route('/item', {
	name: 'showItem'
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