/**
* 
* Backbone View Manager
*
* @description
* Provides a simple way to register views and
* to reset all views in one call
*
* @author Hjörtur Hilmarsson (14islands)
* @version 0.1
*
* @requires 
* Underscore.js & Backbone.js
* 
*/
(function( _ ) {

	// constructor
	var ViewManager = function() {};

	// extend the prototype
	_.extend( ViewManager.prototype, {

		// extend the prototype
		views: [],

		// registers a view
		register: function( view ) {
			this.views.push( view );
		},

		// calls dispose on all views
		// where the method exists 
		disposeAll: function() {

			// loop through the view
			for( var i = 0; i < this.views.length; i++ ) {

				// get view 
				var view = this.views[i];

				// check if view implements 
				// the dispose method
				if( _.isFunction( view.dispose ) ) {
					view.dispose();
				}
			}

		},

		// resets all views
		reset: function() {

			// calls dispose on
			// all views
			this.disposeAll();

			// empty array
			// after reset
			this.views = [];

		},

		// retrun the current 
		// number of views
		count: function() {
			return this.views.length;
		}

	});

	// copy on the windows object
	window.Backbone.ViewManager = ViewManager;


})( _ );