const pageTree = require('./pageTree');
const options = require('../_data/options');

/**
 *
 * @param collection
 * @param glob
 * @returns {Array}
 */
function pageCollection(collection, glob) {
  let pages = pageTree(collection.getFilteredByGlob(glob), {
    inputDir: options.dir.input
  });

  if (pages.length === 1) {
    pages = pages[0].children;
  }

  const nav = pages[0].pages[0].data.nav || pages[0].pages[0].data.baseVersion.nav;

  if (!nav) {
    return [];
  }

  const navIndexed = Object.keys(nav);

  // Sort pages according to nav definition.
  pages.sort(function(a, b) {
    const indexA = navIndexed.findIndex(item => item === a.slug);
    const indexB = navIndexed.findIndex(item => item === b.slug);

    return indexA - indexB;
  });

  return pages;
}

module.exports = pageCollection;
