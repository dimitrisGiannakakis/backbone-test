// Filename: collections/projects
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/todo'
], function(_, Backbone, ListModel){
  var ProjectCollection = Backbone.Collection.extend({
    model: ListModel
  });
  // You don't usually return a collection instantiated
  return ProjectCollection;
});
