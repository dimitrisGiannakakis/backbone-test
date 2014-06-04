define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects/projects',
  'text!templates/projects/todo.html',
  'views/projects/item'
], function($, _, Backbone, ProjectsCollection, TodoTemplate, ItemView){
    var TodoView = Backbone.View.extend({
    el: $("#container"),
    events : {
        'keypress #text1': 'addOne'
    },
    initialize: function(){
        this.$input = this.$('#text1');
        this.collection = new ProjectsCollection();
    },
    render: function() {
        var compiledTemplate = _.template( TodoTemplate, { projects: this.collection.models } );
        this.$el.html(compiledTemplate);
    },
    createOnEnter: function(e){
        this.$input.val();
    },
    addOne: function(e){
        if (e.keyCode == 13) {
            var item = new ItemView();
            $('#todo-list').append(item.render().el);
        }
    }
    });
    // Returning instantiated views can be quite useful for having "state"
    return TodoView;
});
