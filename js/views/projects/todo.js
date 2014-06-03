define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects/projects',
  'text!templates/projects/todo.html'
], function($, _, Backbone,ProjectsCollection,  TodoTemplate){
  var TodoView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
this.collection = new ProjectsCollection();
    },
    render: function() {
      var compiledTemplate = _.template( TodoTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }	
  });
  // Returning instantiated views can be quite useful for having "state"
  return TodoView;
});;
