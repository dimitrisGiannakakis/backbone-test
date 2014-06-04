// Filename: models/todo
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var ListModel = Backbone.Model.extend({
    defaults: {
        title :"",
        complteted: false
    }
  });
  // Return the model for the module
  return ListModel;
});
