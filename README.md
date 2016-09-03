## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-ImageDisplay',
		config: {
			image: '', // Name of the image (including file extension) here, place image in '/images/' folder
			maxHeight: '', // Optional, possible values: absolute (e.g. '20px') or relative ('50%')
			maxWidth: '' // Optional, use absolute values (e.g. '30px', '100px')
			},
		position: 'bottom_right'	// This can be any of the regions.
	}	// Place a comma after the bracket if there are more modules in your config file
]
````
