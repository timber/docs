function redirectCollection(collection, glob, site) {
  let redirects = collection.getFilteredByGlob(glob);

  // Filter out index.
  redirects = redirects.filter((item) => item.filePathStem !== '/v1/index');

  redirects = redirects.map((item) => {
    // Previously, the v1 docs lived in a non-versioned folder (e.g. timber.github.io/docs/getting-started/setup/). Now, we take the v1 URLs as a basis for redirects from
    // that no-versioned folder to the latest version. This might lead to 404s, but we will
    // live with that for the moment.
    return {
      from: item.url.replace('/v1', ''),
      to: item.url.replace('/v1', `/${site.versions[0].slug}`),
    };
  });

  return redirects;
}

module.exports = redirectCollection;
