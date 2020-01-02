const markdown = require('./lib/markdown');
const manifestFilter = require('./lib/manifestFilter');
const pageCollection = require('./lib/pageCollection');
const selectChildren = require('./lib/selectChildren');
const options = require('./_data/options');
const site = require('./_data/site');

module.exports = function(config) {
  // Copy build folder.
  config.addPassthroughCopy('build');

  // Filters.
  config.addFilter('manifest', manifestFilter);
  config.addFilter('selectChildren', selectChildren);

  // Plugins
  config.addPlugin(require('eleventy-plugin-toc'));

  config.setLibrary('md', markdown);

  site.versions.forEach(version => {
    config.addCollection(version.slug, function(collection) {
      return pageCollection(collection, version.glob);
    });
  });

  config.setBrowserSyncConfig({
    /**
     * Insert Browsersync snippet into head, to make it compatible with Turbolinks.
     *
     * @link https://github.com/BrowserSync/browser-sync/wiki/Browsersync-for-Turbolinks
     */
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        }
      }
    }
  });

  return options;
};
