'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navMenu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});
