const fs = require('fs');
const mix = require('laravel-mix');
const { config } = require('./webpack.mix.config');

mix
	/**
	 * JavaScript
	 */
	.js('assets/js/app.js', 'build/js')

	/**
	 * SASS
	 */
	.sass('assets/sass/styles.scss', 'css/', config.sass)
	.sass('assets/sass/mobile.scss', 'css/', config.sass)

	/**
	 * Copy files
	 */
	// .copy('assets/css/**', 'build/css')
	// .copyDirectory('assets/fonts', 'build/fonts')
	.copyDirectory('assets/img', 'build/img')
	.copyDirectory('assets/favicons', 'build/favicons')

	// The path for mix-manifest.json
	.setPublicPath('build')

	.version([])
	.options(config.mix)
	.webpackConfig({ ...config.webpack, ...{ devtool: false } })

	/**
	 * Copy manifest file to _data folder to make it available as global data that
	 * can be used in an eleventy filter.
	 */
	.then(() => {
		fs.copyFile('build/mix-manifest.json', '_data/mixManifest.json', err => {
			if (err) throw err;
		});
	});

/**
 * Sourcemaps
 *
 * In dev, sourcemaps are inlined into the files directly.
 *
 * @link https://github.com/JeffreyWay/laravel-mix/issues/879#issuecomment-354152991
 */
if (!mix.inProduction()) {
	mix.webpackConfig(config.webpack).sourceMaps();
}
