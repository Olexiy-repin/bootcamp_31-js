'use strict';

const backdropEl = document.querySelector('.js-backdrop');
const openModalBtnEl = document.querySelector('.js-modal-open');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const onOpenModalBtnClick = function () {
  backdropEl.classList.add('is-open');
  document.addEventListener('keydown', onEscBtnPush);
};

const closeModal = function () {
  backdropEl.classList.remove('is-open');
  document.removeEventListener('keydown', onEscBtnPush);
};

const onEscBtnPush = function (event) {
  if (event.code !== 'Escape') {
    return;
  }

  closeModal();
};

openModalBtnEl.addEventListener('click', onOpenModalBtnClick);
closeModalBtnEl.addEventListener('click', closeModal);
