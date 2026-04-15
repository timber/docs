const cheerio = require('cheerio');

/**
 * Generate a Table of Contents from HTML content
 * 
 * @param {string} content - HTML content to parse
 * @param {object} options - Configuration options
 * @returns {string} - HTML for table of contents
 */
module.exports = function (content, options = {}) {
   const defaults = {
      tags: ['h2', 'h3', 'h4'],
      wrapper: 'nav',
      wrapperClass: 'toc',
      ul: true,
      flat: false,
   };

   const opts = { ...defaults, ...options };

   if (!content) return '';

   const $ = cheerio.load(content);
   const headings = [];

   // Create a selector for all heading tags
   const selector = opts.tags.join(', ');

   // Collect headings in document order
   $(selector).each((i, heading) => {
      const $heading = $(heading);
      const id = $heading.attr('id');

      // Clone the heading and remove any anchor links inside
      const $clone = $heading.clone();
      $clone.find('a').remove();
      const text = $clone.text().trim();

      const tagName = heading.tagName.toLowerCase();
      const level = parseInt(tagName.substring(1));

      if (id) {
         headings.push({ id, text, level });
      }
   });

   if (headings.length === 0) return '';

   let toc = opts.wrapper ? `<${opts.wrapper} class="${opts.wrapperClass}">` : '';

   if (opts.flat) {
      toc += '<ul>';
      headings.forEach((heading) => {
         toc += `<li><a href="#${heading.id}">${heading.text}</a></li>`;
      });
      toc += '</ul>';
   } else {
      // Nested structure
      let currentLevel = opts.tags[0] ? parseInt(opts.tags[0].substring(1)) : 2;
      toc += '<ul>';

      headings.forEach((heading, index) => {
         if (heading.level > currentLevel) {
            toc += '<ul>'.repeat(heading.level - currentLevel);
         } else if (heading.level < currentLevel) {
            toc += '</li></ul>'.repeat(currentLevel - heading.level) + '</li>';
         } else if (index > 0) {
            toc += '</li>';
         }

         toc += `<li><a href="#${heading.id}">${heading.text}</a>`;
         currentLevel = heading.level;
      });

      // Close remaining tags
      const minLevel = opts.tags[0] ? parseInt(opts.tags[0].substring(1)) : 2;
      toc += '</li></ul>'.repeat(currentLevel - minLevel + 1);
   }

   if (opts.wrapper) {
      toc += `</${opts.wrapper}>`;
   }

   return toc;
};
