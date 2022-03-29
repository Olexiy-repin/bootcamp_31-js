'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const listEl = document.querySelector('.js-gallery');

// Создание li
const listItemEl = document.createElement('li');
listItemEl.classList.add('gallery-item');

// Создание a
const listLinkEl = document.createElement('a');
listLinkEl.href = '#';
listItemEl.append(listLinkEl);

// Создание img
const listImgEl = document.createElement('img');
listImgEl.src = 'https://picsum.photos/id/237/200/300';
listImgEl.alt = 'Labrador';
listLinkEl.append(listImgEl);

// Вставка элементов
listEl.append(listItemEl);