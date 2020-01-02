import { slideup } from './navigation';
import Turbolinks from 'turbolinks';

Turbolinks.start();

document.addEventListener('DOMContentLoaded', function() {
  slideup();
})

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
