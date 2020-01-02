module.exports = {
  title: 'Timber Documentation',
  languageCode: 'en',
  url:
    process.env.ELEVENTY_ENV === 'development'
      ? ''
      : 'https://timber.github.io',
  versions: [
    {
      name: 'v2.0',
      slug: 'v2',
      link: '/',
      // Ignore folders of other versions.
      glob: './content/!(v?)/**'
    },
    {
      name: 'v1.0',
      slug: 'v1',
      link: '/v1',
      glob: './content/v1/**'
    }
  ]
};
