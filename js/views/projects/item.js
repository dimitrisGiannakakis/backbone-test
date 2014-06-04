define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects/projects',
  'text!templates/projects/todo.html'
], function($, _, Backbone, ProjectsCollection, TodoTemplate){
  var ItemView = Backbone.View.extend({
    tagName :'li',
    events : {
    	'click .destroy' : 'clear'
    },
    initialize: function(){
    this.collection = new ProjectsCollection();

    },
    render: function() {
	    console.log(this);
	  
      this.$el.html('<pre>'+$('#text1').val()+'<button class="destroy">X</button></pre>');
      this.collection.create({'title' : $('#text1').val()});
      $('#text1').val('');
      return this;
    },
    clear: function(e) {
	    console.log(  this.collection);
      this.remove(this);
    }
 });
  // Returning instantiated views can be quite useful for having "state"
  return ItemView;
});
