// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/projects/list',
  'views/projects/todo'
], function($, _, Backbone, ProjectListView, TodoView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'list' :	   'createList',
      // Default
      '*actions': 'defaultAction'
    }
  });
  

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:showProjects', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var projectListView = new ProjectListView();
      projectListView.render();
    });

     app_router.on('route:createList', function(){
      // We have no matching route, lets just log what the URL was
       // 'views/projects/list'
      var todoView = new TodoView();
      todoView.render();
    });

    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
