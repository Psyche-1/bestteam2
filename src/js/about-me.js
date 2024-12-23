import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import { Keyboard, Navigation } from 'swiper/modules';
import Swiper from 'swiper';


new Accordion('.about-accordion-container', {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
});

const aboutMeSwiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', e => {
  aboutMeSwiper.slideNext();
});