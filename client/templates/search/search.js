// Only client
Template.playersOverview.onCreated(function () {
  // set up reactive computation
  this.autorun(function () {
    var instance = EasySearch.getComponentInstance(
        { index : 'sell_items' }
    );

    instance.on('autosuggestSelected', function (values) {
      // run every time the autosuggest selection changes
    });
  });
});
Template.playersOverview.helpers({
  'suggestion' : function () {
     return Template.suggestionTpl;
  }
});