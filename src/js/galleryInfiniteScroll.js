'use strict';
// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const targetEl = document.querySelector('.target-element');

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries, observe) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      unsplashApi.page += 1;

      try {
        const photosResponse = await unsplashApi.fetchPhotos();

        if (unsplashApi.page === photosResponse.data.total_pages) {
          observer.unobserve(targetEl);
        }

        galleryListEl.insertAdjacentHTML(
          'beforeend',
          createGalleryCards(photosResponse.data.results)
        );
      } catch (err) {
        console.log(err);
      }
    }
  });
}, options);

const unsplashApi = new UnsplashAPI();

const appendRandomPhotos = async () => {
  try {
    const response = await unsplashApi.fetchRandomPhotos();

    galleryListEl.innerHTML = createGalleryCards(response.data);
  } catch (err) {
    console.log(err);
  }
};

appendRandomPhotos();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.query = searchQuery;
  unsplashApi.page = 1;

  try {
    const photosResponse = await unsplashApi.fetchPhotos();

    galleryListEl.innerHTML = createGalleryCards(photosResponse.data.results);
    observer.observe(targetEl);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
