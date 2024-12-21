import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container', { showMultiple: true });

const arrows = document.querySelectorAll('.faq-ac-trigger');

for (const arrow of arrows) {
  arrow.addEventListener('click', changeDirectionArrow);
}

function changeDirectionArrow(e) {
  console.log(e.currentTarget.getAttribute('aria-expanded')); //.children[0].children[0]
  if (e.currentTarget.getAttribute('aria-expanded') === 'true') {
    e.currentTarget.children[0].children[0].innerHTML =
      '<use href="../img/icons.svg#icon-icon-up"></use>';
  } else if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
    e.currentTarget.children[0].children[0].innerHTML =
      '<use href="../img/icons.svg#icon-icon-down"></use>';
  }
}
