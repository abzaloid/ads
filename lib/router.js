Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
 	waitOn: function() { 
 		return [Meteor.subscribe('items'), Meteor.subscribe('categories')]; 
 	}
});

Router.route('/', {
	name: 'layout'
});

Router.route('/search', {
	name: 'adsList'
});
