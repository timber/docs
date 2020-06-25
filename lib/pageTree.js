const path = require('path');

function pageTree(items, options) {
  const pages = [];
  const { inputDir } = options;

  items.forEach(function(item) {
    const itemPath = path.parse(item.inputPath);
    const dir = path.normalize(itemPath.dir);
    let pathParts = dir.split(path.sep);

    // Filter out input dir.
    pathParts = pathParts.filter(folder => folder !== inputDir);

    let currentLevel = pages;
    let lastPart = null;

    pathParts.forEach(function(folderName, index) {
      const folder = {
        pages: [],
        slug: folderName,
        children: [],
        parent: null
      };

      let existingFolder = findWhere(currentLevel, 'slug', folderName);
      const isLast = index + 1 === pathParts.length;

      // Is it an index page?
      const isIndex = item.template.fileSlug.filename === 'index.md';

      // Where the item should be added to.
      const addTo = existingFolder || folder;

      addTo.parent = lastPart;

      if (isLast) {
        if (isIndex) {
          item.data.isIndex = true;

          // Add index page one level higher.
					if (addTo.parent) {
          	addTo.parent.pages.push(item);
					}
        } else {
          addTo.pages.push(item);
        }
      }

      if (existingFolder) {
        // Sort what we already have.
        if (existingFolder.pages.length > 1) {
          existingFolder.pages.sort(function(a, b) {
            // Sort by sort key if available.
            if (a.data.order || b.data.order) {
              // Use 99999 as sort order for missing sort order.
              return (a.data.order || 99999) - (b.data.order || 99999);
            }

            // Sort by title.
            return a.data.title > b.data.title ? 1 : -1;
          });
        }
      } else {
        currentLevel.push(addTo);
      }

      currentLevel = addTo.children;
      lastPart = addTo;
    });
  });

  return pages;
}

function findWhere(array, key, value) {
  // Counter.
  t = 0;

  // Find the index where the id is the same as the value.
  while (t < array.length && array[t][key] !== value) {
    t++;
  }

  if (t < array.length) {
    return array[t];
  }

  return false;
}

module.exports = pageTree;
