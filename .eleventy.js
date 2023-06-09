const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");

const markdown = require('./lib/markdown');
const manifestFilter = require('./lib/manifestFilter');
const pageCollection = require('./lib/pageCollection');
const selectChildren = require('./lib/selectChildren');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const options = require('./_data/options');
const site = require('./_data/site');

module.exports = function(config) {
  // Copy folders and files.
  config.addPassthroughCopy('build');

  // Filters.
  config.addFilter('manifest', manifestFilter);
  config.addFilter('selectChildren', selectChildren);

  /**
   * Date string for Sitemap.
   *
   * @link https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
   */
  config.addFilter('htmlDateString', (dateObj) => {
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Plugins
  config.addPlugin(require('eleventy-plugin-toc'));
  // Required for sitemap.
  config.addPlugin(pluginRss);

  config.setLibrary('md', markdown);

  /**
   * Minify the output
   *
   * @link https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
   */
  config.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }

    return content;
  });

  site.versions.forEach(version => {
    config.addCollection(version.slug, function(collection) {
      return pageCollection(collection, version.glob);
    });
  });

  return options;
};
