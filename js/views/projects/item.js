define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects/projects',
  'text!templates/projects/todo.html'
], function($, _, Backbone, ProjectsCollection, TodoTemplate){
  var ItemView = Backbone.View.extend({
    tagName :'li',
    initialize: function(){
    this.collection = new ProjectsCollection();

    },
    render: function() {
      this.$el.html($('#text1').val());
      return this;
    }
 });
  // Returning instantiated views can be quite useful for having "state"
  return ItemView;
});
