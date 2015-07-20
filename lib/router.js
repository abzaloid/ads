Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
 	waitOn: function() { 
 		return Meteor.subscribe('ads'); 
 	}
});

Router.route('/', {name: 'layout'});

Router.route('/results', {
	name: 'adsList',
});