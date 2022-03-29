'use strict';
//* Объект style, cssText
const sectionTitleEl = document.querySelector('.js-sec-title');
// sectionTitleEl.style.fontSize = '28px';
// sectionTitleEl.style.color = 'tomato';
// sectionTitleEl.style.backgroundColor = 'teal';

//* Методы объекта classList (add, remove, toggle, contains)
const backdropEl = document.querySelector('.js-backdrop');
const modalBtnEl = document.querySelector('.js-modal-btn');

modalBtnEl.addEventListener('click', () => {
    backdropEl.classList.add('is-backdrop-open');
});
