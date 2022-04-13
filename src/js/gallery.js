'use strict';
// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.query = searchQuery;
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotos()
    .then(response => {
      if (!response.data.results.length) {
        console.log('Images not found!');
        return;
      }

      galleryListEl.innerHTML = createGalleryCards(response.data.results);
      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnClick = event => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotos()
    .then(response => {
      if (unsplashApi.page === response.data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(response.data.results));
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
