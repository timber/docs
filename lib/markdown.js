const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor')
const MarkdownItAnchor = require('markdown-it-anchor');
const slugify = require('slugify');
const Prism = require('prismjs');
const PrismLoader = require('prismjs/components/index.js');

let highlight = function(string, language) {
  if (!language) {
    // empty string means defer to the upstream escaping code built into markdown lib.
    return '';
  }

  let split = language.split('/');

  if (split.length) {
    language = split.shift();
  }

  language = language.toLowerCase();

  let html;

  if (language === 'text' || language === 'txt') {
    html = string;
  } else {
    if (!Prism.languages[language]) {
      PrismLoader([language]);
    }

    html = Prism.highlight(string, Prism.languages[language], language);
  }

  let lines = html.split('\n').slice(0, -1); // The last line is empty.

  return `<pre class="language-${language}"><code class="language-${language}">${lines.join(
    '<br>'
  )}</code></pre>`;
};

let markdownItOptions = {
  html: true,
  breaks: false,
  linkify: true,
  highlight: highlight
};

function markdownItSlugify(s) {
  return slugify(s, { lower: true, remove: /[:’'`,()]/g });
}

let markdown = MarkdownIt(markdownItOptions).use(MarkdownItAnchor, {
  permalink: anchor.permalink.linkInsideHeader({
    class: 'directLink',
    placement: 'after'
  }),
  slugify: markdownItSlugify,
  level: [1, 2, 3, 4]
});

module.exports = markdown;
