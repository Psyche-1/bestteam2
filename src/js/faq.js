import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import arrowUp from './img/icons.svg#icon-icon-up';
import arrowDown from './img/icons.svg#icon-icon-down';

const accordion = new Accordion('.accordion-container', { showMultiple: true });

const arrows = document.querySelectorAll('.faq-ac-trigger');

for (const arrow of arrows) {
  arrow.addEventListener('click', changeDirectionArrow);
}

function changeDirectionArrow(e) {
  console.log(e.currentTarget.getAttribute('aria-expanded')); //.children[0].children[0]
  if (e.currentTarget.getAttribute('aria-expanded') === 'true') {
    e.currentTarget.children[0].children[0].innerHTML = `<use href="${arrowUp}"></use>`;
  } else if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
    e.currentTarget.children[0].children[0].innerHTML = `<use href="${arrowDown}"></use>`;
  }
}
