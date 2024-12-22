import firstImgDst from '../img/projects/1-dst.jpg';
import firstImgDst2x from '../img/projects/1-dst-2x.jpg';
import firstImgMob from '../img/projects/1-mob.jpg';
import firstImgMob2x from '../img/projects/1-mob-2x.jpg';
import secondImgDst from '../img/projects/2-dst.jpg';
import secondImgDst2x from '../img/projects/2-dst-2x.jpg';
import secondImgMob from '../img/projects/2-mob.jpg';
import secondImgMob2x from '../img/projects/2-mob-2x.jpg';
import thirdImgDst from '../img/projects/3-dst.jpg';
import thirdImgDst2x from '../img/projects/3-dst-2x.jpg';
import thirdImgMob from '../img/projects/3-mob.jpg';
import thirdImgMob2x from '../img/projects/3-mob-2x.jpg';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const images = [
  {
    dst: firstImgDst,
    dst2x: firstImgDst2x,
    mob: firstImgMob,
    mob2x: firstImgMob2x,
  },
  {
    dst: secondImgDst,
    dst2x: secondImgDst2x,
    mob: secondImgMob,
    mob2x: secondImgMob2x,
  },
  {
    dst: thirdImgDst,
    dst2x: thirdImgDst2x,
    mob: thirdImgMob,
    mob2x: thirdImgMob2x,
  },
];

const list = document.querySelector('.projects-list');

function createMarkUp(img) {
  return img
    .map(item => {
      return `
      <div class="swiper-slide">
        <li class="projects-item">
        <div class="projects-item-info">
            <ul class="projects-item-info-hashtags">
            <li class="projects-item-info-hashtags-tag">#react</li>
            <li class="projects-item-info-hashtags-tag">#js</li>
            <li class="projects-item-info-hashtags-tag">#node js</li>
            <li class="projects-item-info-hashtags-tag">#git</li>
            </ul>
            <div class="projects-item-info-descr">
            <h3 class="projects-item-info-descr-title">
                Programming Across Borders: Ideas, Technologies, Innovations
            </h3>
            <a target="_blank" href="https://psyche-1.github.io/bestteam2/" class="projects-item-info-descr-link">See project</a>
            </div>
        </div>
        <div class="projects-item-project">
            <picture class="project-picture">
            <source
                srcset="${item.dst} 1x, ${item.dst2x} 2x"
                media="(min-width: 768px)"
            />
            <source
                srcset="${item.mob} 1x, ${item.mob2x} 2x"
                media="(max-width: 767px)"
            />
            <img src=${firstImgDst} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `;
    })
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkUp(images));

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  speed: 400,
  effect: 'slide',
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
  },
});

const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const buttonIcons = document.querySelectorAll('.projects-button-icon');

swiper.on('progress', (swiper, progress) => {
  if (progress === 1) {
    nextButton.disabled = true;
    buttonIcons[1].classList.add('projects-button-icon-disabled');
    return;
  } else if (progress === 0) {
    prevButton.disabled = true;
    buttonIcons[0].classList.add('projects-button-icon-disabled');
    return;
  }

  buttonIcons[0].classList.remove('projects-button-icon-disabled');
  buttonIcons[1].classList.remove('projects-button-icon-disabled');
  nextButton.disabled = false;
  prevButton.disabled = false;
});
