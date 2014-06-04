//Filename : views/projects/book.js
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects/projects',
  'text!templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate){
  var BookView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "LOrd"});
      this.collection.add({ name: "lord2"})
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return BookView;

});
