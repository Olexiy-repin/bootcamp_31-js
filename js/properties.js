'use strict';
//* Аттрибуты как свойства объекта
const mainTitleEl = document.querySelector('.js-main-title');
const descriptionEl = document.querySelector('.js-desc');
const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-swap-image-btn');

mainTitleEl.textContent = 'Hello';
descriptionEl.textContent = 'Description';

// imgEl.src = 'https://picsum.photos/id/870/200/300';
// imgEl.alt = 'beacon';
// console.log(imgEl.src);

swapBtnEl.addEventListener('click', () => {
  imgEl.src = 'https://picsum.photos/id/870/200/300';
  imgEl.alt = 'beacon';
});

/*
 * Доступ к аттрибутам
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

console.log(imgEl);
