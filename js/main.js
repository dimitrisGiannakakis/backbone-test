// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    localStorage : 'libs/backbone.localStorage/backbone.localStorage',
    backbone: 'libs/backbone/backbone-min',
    templates : '../templates'
  }

});

require(['app'], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
