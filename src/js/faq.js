import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import arrow from '../img/icons.svg#icon-icon-up';

const accordion = new Accordion('.accordion-container', { showMultiple: true });

const arrows = document.querySelectorAll('.faq-ac-trigger');

for (const arrow of arrows) {
  arrow.addEventListener('click', changeDirectionArrow);
}

function changeDirectionArrow(e) {
  const arrowDown = e.currentTarget.querySelector('.faq-arrow-down');
  const arrowUp = e.currentTarget.querySelector('.faq-arrow-up');
  // console.log(e.currentTarget.getAttribute('aria-expanded'));
  if (e.currentTarget.getAttribute('aria-expanded') === 'true') {
    arrowDown.style = 'display: none';
    arrowUp.style = 'display: block';
  } else if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
    arrowDown.style = 'display: block';
    arrowUp.style = 'display: none';
  }
}
