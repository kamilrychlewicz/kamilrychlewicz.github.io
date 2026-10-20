/*
 * Shared header for every page.
 * Edit the HTML between the backticks below to change the name or menu.
 * The current-page marker is set automatically by the code at the bottom.
 */
(() => {
  'use strict';

  const headerHTML = `<header class="site-header">
    <div class="container header-inner">
      <a class="site-name" href="index.html">Kamil Rychlewicz</a>
      <!-- Edit these menu links here. Every page uses this shared header. -->
      <nav class="site-nav" aria-label="Main navigation">
      <a href="index.html">Home</a>
      <a href="news.html" class="news-link">News</a>
      <a href="research.html">Research</a>
      <a href="teaching.html">Teaching</a>
      <a href="epda-and-elsa.html">EPDA and ELSA</a>
      <a href="other-activities.html">Other activities</a>
      <a href="miscellaneous.html">Miscellaneous</a>
    </nav>
    </div>
  </header>`;

  const script = document.currentScript;
  script.insertAdjacentHTML('beforebegin', headerHTML);
  const header = script.previousElementSibling;
  const pageName = (pathname) => decodeURIComponent(pathname.split('/').pop() || 'index.html');
  const currentPage = pageName(window.location.pathname);

  // Keep the name's space on Home so the menu stays aligned with other pages.
  if (currentPage === 'index.html') {
    header.querySelector('.site-name').style.visibility = 'hidden';
  }

  for (const link of header.querySelectorAll('.site-nav a[href]')) {
    const target = new URL(link.getAttribute('href'), window.location.href);
    if (pageName(target.pathname) === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  }
})();
