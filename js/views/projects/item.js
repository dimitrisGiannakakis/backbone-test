define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projects/item.html',
    'collections/projects/projects',
], function($, _, Backbone, ItemTemplate, ProjectsCollection){
  var ItemView = Backbone.View.extend({
    tagName :'li',
    events : {
    	'click .destroy' : 'clear',
	'dblclick label': 'edit',
  	 'keypress .editing': 'add',
    },
    initialize: function(){
    },
    render: function() {
	   // console.log(this);
        var compiledTemplate = _.template( ItemTemplate, { item: this.model.toJSON() } );
        this.$el.html(compiledTemplate);
       // this.collection.create({'title' : $('#text1').val()});
        return this;
    },
    clear: function(e) {
        this.remove(this);
        //this.collection.destroy();
        console.log(this.model);
        this.model.destroy();
    },
    edit: function(e){
     this.$('#title').toggleClass('edit editing');

     this.$('#title').prop('type', 'text');
     this.$('label').hide();
     this.$('#title').focus(); 
    // this.$('#solinas').focus();
    },
    add: function(e){
        if (e.keyCode == 13) {
	 this.model.save({ title: this.$('#title').val().trim() }); 
	    // this.render().el;
         this.$('label').show();
 	this.$('#title').prop('type', 'hidden');
	this.render();	
	}
    },

 });
  // Returning instantiated views can be quite useful for having "state"
  return ItemView;
});
