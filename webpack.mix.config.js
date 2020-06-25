const config = {
	/**
	 * Options for dart-sass.
	 *
	 * @link https://github.com/sass/dart-sass#javascript-api
	 */
	sass: {
		// Include additional SASS files into load paths
		// Example: includePaths: ['assets/vendor/bootstrap-sass/assets/stylesheets/']
		includePaths: ['assets/sass', 'node_modules']
	},

	mix: {
		postCSS: [
			require('autoprefixer')
		],
		processCssUrls: false
	},

	/**
	 * Webpack Config
	 */
	webpack: {
		// @link https://webpack.js.org/configuration/devtool/#devtool
		devtool: 'source-map',
		/**
		 * When using JavaScript files that are symlinked, Webpack often runs into
		 * errors when it tries to resolve symlinks.
		 *
		 * @link https://webpack.js.org/configuration/resolve/#resolve-symlinks
		 */
		resolve: {
			symlinks: false
		}
	}
};

module.exports.config = config;
