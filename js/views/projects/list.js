// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects/projects',
  'text!templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      // Compile the template using Underscores micro-templating
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "Gingesor Kid"});
      this.collection.add({ name: "Ginger Kid"})
    },
    render: function() {
      var compiledTemplate = _.template(projectsListTemplate, {projects: this.collection.models});
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});;
