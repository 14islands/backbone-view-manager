/*
* Spec for the Backbone ViewManager
*/
describe("Backbone View Manager", function() {

	beforeEach(function() {

		// mockup view
		this.MockupView = Backbone.View.extend({
			disposed: false,
			dispose: function() {
				this.disposed = true;
			}
		});

		// view manager
		this.viewManager = new Backbone.ViewManager();

	});

	it("Should register views", function() {
		
		// register views
		this.viewManager.register( new this.MockupView() );
		this.viewManager.register( new this.MockupView() );
		this.viewManager.register( new this.MockupView() );

		// check if all views are registered
		expect( this.viewManager.count() ).toEqual( 3 ); 

	});

	it("Should dispose views", function() {

		// dispose all views
		this.viewManager.disposeAll();

		// check if all are disposed
		expect( this.viewManager.views[0].disposed ).toEqual( true );
		expect( this.viewManager.views[1].disposed ).toEqual( true );
		expect( this.viewManager.views[2].disposed ).toEqual( true ); 

	});

	it("Should reset views", function() {

		// dispose all views
		this.viewManager.reset();

		// check if all views are removed
		expect( this.viewManager.count() ).toEqual( 0 ); 

	});

});