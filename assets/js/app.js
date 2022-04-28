import { slideup } from './navigation';
import Turbolinks from 'turbolinks';
import { domReady } from './domready';

Turbolinks.start();

domReady(() => {
  slideup();
});

/**
 * Keep scroll position in sidebar.
 */

function findElements() {
  return document.querySelectorAll('[data-turbolinks-keep-scroll-position]');
}

const scrollTops = {};

addEventListener('turbolinks:before-render', function() {
  findElements().forEach(function(element) {
    scrollTops[element.id] = element.scrollTop;
  });
});

addEventListener('turbolinks:render', function() {
  findElements().forEach(function(element) {
    if (scrollTops[element.id]) {
      element.scrollTop = scrollTops[element.id];
    }
  });
});
