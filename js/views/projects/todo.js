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
        'keypress #text1': 'addOne',
    },
    initialize: function(){
        this.collection = new ProjectsCollection();
	     var items = this.collection.fetch();

    },
    render: function() {
        var compiledTemplate = _.template( TodoTemplate );
        this.$el.html(compiledTemplate);
        for( var i = 0 ; i<this.collection.length; i++) {
            //console.log(this.collection.models[i].attributes.title);
            console.log(this.collection.at(i));
            var itemview = new ItemView({model: this.collection.at(i)})
                $('#todo-list').append(itemview.render().$el);
        }
    },
    addOne: function(e){
        if (e.keyCode == 13) {
            var model = this.collection.create({'title' : $('#text1').val()});
            var item = new ItemView({model: model});
            $('#todo-list').append(item.render().el);
            $('#text1').val('');
        }
    }, 
    });
    // Returning instantiated views can be quite useful for having "state"
    return TodoView;
});
