module.exports = {
  pathPrefix: '/docs/',
  dir: {
    input: 'content',
    output: 'docs',
    // Relative to input folder.
    includes: '../_includes',
    // Relative to input folder.
    data: '../_data'
  },
  markdownTemplateEngine: false,
  templateFormats: ['md', 'njk'],
  /**
   * Copies files with non-matching template file extensions directly to the
   * output directory without modification.
   *
   * @link https://www.11ty.io/docs/copy/
   */
  passthroughFileCopy: true
};
