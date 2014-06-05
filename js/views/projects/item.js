define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projects/item.html'
], function($, _, Backbone, ItemTemplate){
  var ItemView = Backbone.View.extend({
    tagName :'li',
    events : {
    	'click .destroy' : 'clear'
    },
    initialize: function(){
    },
    render: function() {
	   // console.log(this);
        var compiledTemplate = _.template( ItemTemplate, { item: this.model.toJSON() } );
        this.$el.html(compiledTemplate);
       // this.collection.create({'title' : $('#text1').val()});
        return this;
    },
    clear: function(e) {
        this.remove(this);
        //this.collection.destroy();
        console.log(this.model);
        this.model.destroy();
    }
 });
  // Returning instantiated views can be quite useful for having "state"
  return ItemView;
});
