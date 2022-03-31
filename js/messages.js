'use strict';
const messagesWrapper = document.querySelector('.js-messages-wrapper');

const onMessageClick = event => {
  const target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const messageEl = target.closest('li.message');

  messageEl.remove();
};

messagesWrapper.addEventListener('click', onMessageClick);
