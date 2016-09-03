Module.register("MMM-ImageDisplay",{

	defaults: {
		image: 'test.png',
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("img");
		wrapper.src = 'modules/MMM-ImageDisplay/images/' + this.config.image;
		wrapper.style.maxWidth = this.config.maxWidth;		// Use relative or absolute parameters
		wrapper.style.maxHeight = this.config.maxHeight;	// Use absolute parameters
		return wrapper;
	}
});