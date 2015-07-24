Template.showItem.helpers({
	item: function () {
		return Items.findOne({});
	}
});

Template.showItem.events({
  "click #add-comment":function(event, template){
    var $commentBody = $("#new-comment");
    if ($commentBody.is(":visible")) {
    	$commentBody.hide();
    } else {
    	$commentBody.show();
    }
  }
});