module.exports = {
  title: 'Timber Documentation',
  languageCode: 'en',
  url:
    process.env.ELEVENTY_ENV === 'development'
      ? ''
      : 'https://timber.github.io',
  versions: [
    {
      value: 2,
      name: 'v2.x',
      slug: 'v2',
      link: '/v2/',
      glob: './content/v2/**',
    },
    {
      value: 1,
      name: 'v1.x',
      slug: 'v1',
      link: '/v1/',
      // Ignore folders of other versions.
      glob: './content/v1/**',
    },
  ],
};
