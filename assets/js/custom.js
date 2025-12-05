document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname || '';
  var normalized = path;
  var base = '/Dronex.github.io';

  if (normalized.startsWith(base)) {
    normalized = normalized.substring(base.length) || '/';
  }

  var isBlogRoot = normalized === '/blog' || normalized === '/blog/';
  var isBlogChild = normalized.startsWith('/blog/');

  if (isBlogRoot || isBlogChild) {
    document.body.classList.add('blog-page');
  }
});
