Module.register("MMM-ImageDisplay",{

	defaults: {
		image: 'lys.jpg'
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("img");
		wrapper.src = 'modules/MMM-ImageDisplay/images/' + this.config.image;
		wrapper.setAttribute("style", "max-width: 10%");
		return wrapper;
	}
});