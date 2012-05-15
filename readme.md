
# Backbone View Manager

This is a simple implementation of a view manager for Backbone as explained in this blog post:

http://hjortureh.tumblr.com/post/23095099687/backbone-js-routing-made-simple


## Usage


First register all views, example:

MYAPP.viewManager = new Backbone.ViewManager();
MYAPP.viewManager.register( new BackboneView );


Now its possible to reset all views at once by calling reset:

MYAPP.viewManager.reset();

