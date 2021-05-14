import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const linksBtn = document.querySelectorAll('.container-submenu');

  linksBtn.forEach((el) =>
    el.addEventListener('click', (ev) => {
      ev.preventDefault();
      el.classList.toggle('open');
    })
  );
});
