UI.registerHelper('formatDate', function(date) {
  	console.log(moment(date));
	return moment(date).format('MM-DD-YYYY');
});