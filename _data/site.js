module.exports = {
  title: 'Timber Documentation',
  languageCode: 'en',
  url:
    process.env.ELEVENTY_ENV === 'development'
      ? ''
      : 'https://timber.github.io',
  versions: [
    {
      name: 'v1.0',
      slug: 'v1',
      link: '/',
      // Ignore folders of other versions.
      glob: './content/!(v?)/**'
    },
    {
      name: 'v2.0 DEV',
      slug: 'v2',
      link: '/v2',
      glob: './content/v2/**'
    },
  ]
};
