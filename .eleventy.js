const { DateTime } = require('luxon');
const htmlmin = require('html-minifier');

const markdown = require('./lib/markdown');
const manifestFilter = require('./lib/manifestFilter');
const pageCollection = require('./lib/pageCollection');
const selectChildren = require('./lib/selectChildren');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const options = require('./_data/options');
const site = require('./_data/site');
const redirectCollection = require('./lib/redirectCollection');

module.exports = function (config) {
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
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  config.addNunjucksGlobal('getCurrentVersion', function (version, versions) {
    return versions.find((v) => v.value === version);
  });

  config.addNunjucksGlobal('getOtherVersions', function (version, versions) {
    return versions.filter((v) => v.value !== version);
  });

  config.addJavaScriptFunction('filterArchives', function (archives) {
    archives = archives.filter((archive) => {
      return archive[0] && archive[0]?.pages;
    });

    archives = archives.flat(1);

    archives = archives.filter((archive) => {
      return archive.pages.length > 1;
    });

    archives = archives.map((archive) => {
      archive.title = archive?.pages[0]?.data?.sectionTitle || '';
      archive.version = Number(archive.parent.slug.replace('v', ''));

      return archive;
    });

    return archives;
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
  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  site.versions.forEach((version) => {
    config.addCollection(version.slug, function (collection) {
      return pageCollection(collection, version.glob);
    });

    if (version.slug === 'v1') {
      config.addCollection('v1redirects', function (collection) {
        return redirectCollection(collection, version.glob, site);
      });
    }
  });

  return options;
};
