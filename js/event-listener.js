'use strict';
/*
 * Основы событий. Создание и удаление слушателей. Объект события
 */

/*
 ?- Именование колбеков для слушателей
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300
const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-swap-btn');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnClick = function () {
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
};

swapBtnEl.addEventListener('click', onSwapBtnClick);
removeListenerBtnEl.addEventListener('click', () => {
  swapBtnEl.removeEventListener('click', onSwapBtnClick);
});
