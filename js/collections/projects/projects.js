// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'localStorage',
  // Pull in the Model module from above
  'models/todo'
], function(_, Backbone, Storage, ListModel){
  var ProjectCollection = Backbone.Collection.extend({
    model: ListModel,
    localStorage: new Storage('ProjectCollection'),
  });
  // You don't usually return a collection instantiated
    return ProjectCollection;
});
