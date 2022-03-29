'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

const mainTitleEl = document.querySelector('.js-main-title');
// mainTitleEl.innerHTML = '<span>Title</span>';

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryEL = document.querySelector('.js-gallery');

const makeGalleryCard = ({ width, height, alt, url } = {}) => {
  return `<li class="gallery-item">
  <a href="#">
    <img src="${url}" alt="${alt}" width="${width}" height="${height}">
  </a>
</li>`;
};


// Создания масива строк с элементами
const galleryCardsArr = pictures.map(makeGalleryCard).join('');

// Вставка элементов на страницу
galleryEL.insertAdjacentHTML('beforeend', galleryCardsArr);